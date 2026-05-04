import psycopg2
from psycopg2 import pool, sql, extras
from datetime import datetime, timedelta
import json
import logging
from typing import Optional, List, Dict, Any

# Настройка логгирования
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s',
    filename='asu_bottling.log',
    encoding='utf-8'
)
logger = logging.getLogger(__name__)


class ASUBottlingSystem:
    """
    Основной класс модуля АСУ розлива напитков.
    Реализует интеграцию с БД PostgreSQL согласно схеме пользователя.
    """

    def __init__(self):
        self.db_config = {
            'host': 'localhost',
            'port': 5432,
            'database': 'bottling service',
            'user': 'postgres',
            'password': '1234'
        }
        self.connection_pool = None
        self._init_pool()

    def _init_pool(self):
        """Инициализация пула соединений для производительности."""
        try:
            self.connection_pool = psycopg2.pool.SimpleConnectionPool(
                1, 10,
                **self.db_config
            )
            logger.info("Пул соединений с БД успешно создан.")
        except Exception as e:
            logger.error(f"Ошибка создания пула соединений: {e}")
            raise

    def _get_connection(self):
        """Получение соединения из пула."""
        if self.connection_pool:
            return self.connection_pool.getconn()
        raise Exception("Пул соединений не инициализирован")

    def _release_connection(self, conn):
        """Возврат соединения в пул."""
        if self.connection_pool:
            self.connection_pool.putconn(conn)

    # =======================
    # 1. Аутентификация и Пользователи
    # =======================

    def authenticate_user(self, username: str, password_hash: str) -> Optional[Dict]:
        """
        Проверка учетных данных и получение профиля пользователя.
        В реальном проекте хеширование пароля должно проверяться через bcrypt/argon2.
        """
        conn = self._get_connection()
        cursor = conn.cursor(cursor_factory=extras.RealDictCursor)
        try:
            query = """
                SELECT u.user_id, u.username, u.access_level, u.department, 
                       u.is_active, 
                       COALESCE(o.qualification, t.specialization, e.specialization, 'Admin') as role_detail
                FROM users u
                LEFT JOIN operators o ON u.user_id = o.user_id
                LEFT JOIN technologists t ON u.user_id = t.user_id
                LEFT JOIN engineers e ON u.user_id = e.user_id
                WHERE u.username = %s AND u.password_hash = %s
            """
            cursor.execute(query, (username, password_hash))
            user_data = cursor.fetchone()

            if user_data and user_data['is_active']:
                # Обновление времени последнего входа
                update_query = "UPDATE users SET last_login = %s WHERE user_id = %s"
                cursor.execute(update_query, (datetime.now(), user_data['user_id']))
                conn.commit()
                logger.info(f"Пользователь {username} успешно авторизован.")
                return dict(user_data)
            else:
                logger.warning(f"Неудачная попытка входа для пользователя: {username}")
                return None
        except Exception as e:
            conn.rollback()
            logger.error(f"Ошибка аутентификации: {e}")
            return None
        finally:
            cursor.close()
            self._release_connection(conn)

    # =======================
    # 2. Мониторинг (Датчики)
    # =======================

    def get_sensor_readings(self, location_zone: str = None) -> List[Dict]:
        """
        Получение текущих показаний со всех датчиков или фильтрованных по зоне.
        Таблица: industrial_sensors
        """
        conn = self._get_connection()
        cursor = conn.cursor(cursor_factory=extras.RealDictCursor)
        try:
            if location_zone:
                query = """
                    SELECT sensor_id, sensor_type, location, current_value, unit_of_measure, is_operational
                    FROM industrial_sensors
                    WHERE location LIKE %s
                """
                cursor.execute(query, (f'%{location_zone}%',))
            else:
                query = """
                    SELECT sensor_id, sensor_type, location, current_value, unit_of_measure, is_operational
                    FROM industrial_sensors
                    WHERE is_operational = TRUE
                """
                cursor.execute(query)

            readings = [dict(row) for row in cursor.fetchall()]
            logger.info(f"Получено показаний датчиков: {len(readings)}")
            return readings
        except Exception as e:
            logger.error(f"Ошибка чтения датчиков: {e}")
            return []
        finally:
            cursor.close()
            self._release_connection(conn)

    def update_sensor_value(self, sensor_id: int, new_value: float):
        """Обновление значения датчика (симуляция поступления данных)."""
        conn = self._get_connection()
        cursor = conn.cursor()
        try:
            query = "UPDATE industrial_sensors SET current_value = %s WHERE sensor_id = %s"
            cursor.execute(query, (new_value, sensor_id))
            conn.commit()
        except Exception as e:
            conn.rollback()
            logger.error(f"Ошибка обновления датчика {sensor_id}: {e}")
        finally:
            cursor.close()
            self._release_connection(conn)

    # =======================
    # 3. Управление (Исполнительные механизмы)
    # =======================

    def get_actuator_status(self, device_type: str = None) -> List[Dict]:
        """
        Получение статуса исполнительных механизмов.
        Таблица: actuators
        """
        conn = self._get_connection()
        cursor = conn.cursor(cursor_factory=extras.RealDictCursor)
        try:
            if device_type:
                query = "SELECT * FROM actuators WHERE device_type = %s"
                cursor.execute(query, (device_type,))
            else:
                cursor.execute("SELECT * FROM actuators")

            return [dict(row) for row in cursor.fetchall()]
        except Exception as e:
            logger.error(f"Ошибка получения статуса механизмов: {e}")
            return []
        finally:
            cursor.close()
            self._release_connection(conn)

    def control_actuator(self, actuator_id: int, new_state: str, mode: str = 'AUTO'):
        """
        Изменение состояния исполнительного механизма.
        new_state: IDLE, ACTIVE, OPEN, RUNNING, FAULT
        """
        conn = self._get_connection()
        cursor = conn.cursor()
        try:
            query = """
                UPDATE actuators 
                SET current_state = %s, operation_mode = %s 
                WHERE actuator_id = %s
            """
            cursor.execute(query, (new_state, mode, actuator_id))
            conn.commit()
            logger.info(f"Механизм {actuator_id} переведен в состояние {new_state}")

            # Логирование действия как события
            self.log_system_event(
                event_type='INFO',
                description=f'Управление механизмом {actuator_id}: {new_state}',
                severity=1,
                source='MANUAL_CONTROL'
            )
            return True
        except Exception as e:
            conn.rollback()
            logger.error(f"Ошибка управления механизмом {actuator_id}: {e}")
            return False
        finally:
            cursor.close()
            self._release_connection(conn)

    # =======================
    # 4. События и Аварии
    # =======================

    def log_system_event(self, event_type: str, description: str, severity: int,
                         source: str, operator_id: int = None, is_resolved: bool = False):
        """
        Регистрация события в журнале system_events.
        severity: 1 (Info) - 5 (Critical)
        """
        conn = self._get_connection()
        cursor = conn.cursor()
        try:
            query = """
                INSERT INTO system_events 
                (operator_id, event_type, event_code, description, severity, source, is_resolved)
                VALUES (%s, %s, %s, %s, %s, %s, %s)
            """
            event_code = f"{event_type[:3]}_{datetime.now().strftime('%H%M%S')}"
            cursor.execute(query, (operator_id, event_type, event_code, description, severity, source, is_resolved))
            conn.commit()
            logger.info(f"Событие зарегистрировано: {description}")
        except Exception as e:
            conn.rollback()
            logger.error(f"Ошибка записи события: {e}")
        finally:
            cursor.close()
            self._release_connection(conn)

    def get_unresolved_alarms(self) -> List[Dict]:
        """Получение списка активных аварий."""
        conn = self._get_connection()
        cursor = conn.cursor(cursor_factory=extras.RealDictCursor)
        try:
            query = """
                SELECT event_id, event_type, description, severity, occurrence_time, source
                FROM system_events
                WHERE is_resolved = FALSE AND event_type = 'ALARM'
                ORDER BY severity DESC, occurrence_time ASC
            """
            cursor.execute(query)
            return [dict(row) for row in cursor.fetchall()]
        except Exception as e:
            logger.error(f"Ошибка получения аварий: {e}")
            return []
        finally:
            cursor.close()
            self._release_connection(conn)

    # =======================
    # 5. Отчетность и Рецептуры
    # =======================

    def get_active_recipes(self) -> List[Dict]:
        """Получение активных технологических регламентов."""
        conn = self._get_connection()
        cursor = conn.cursor(cursor_factory=extras.RealDictCursor)
        try:
            query = """
                SELECT regulation_name, process_type, version, process_params
                FROM process_regulations
                WHERE is_active = TRUE
            """
            cursor.execute(query)
            return [dict(row) for row in cursor.fetchall()]
        except Exception as e:
            logger.error(f"Ошибка получения рецептур: {e}")
            return []
        finally:
            cursor.close()
            self._release_connection(conn)

    def generate_production_report(self, technologist_id: int, report_type: str, days_back: int = 1) -> Dict:
        """
        Формирование отчета на основе данных из production_archive и events.
        Сохраняет результат в таблицу production_reports.
        """
        conn = self._get_connection()
        cursor = conn.cursor(cursor_factory=extras.RealDictCursor)
        try:
            period_end = datetime.now()
            period_start = period_end - timedelta(days=days_back)

            # Эмуляция расчета метрик (в реальности - сложные SQL агрегации)
            total_bottles = 45000 * days_back
            reject_count = int(total_bottles * 0.02)  # 2% брак
            efficiency = round(((total_bottles - reject_count) / total_bottles) * 100, 2)

            metrics = {
                "total_bottles": total_bottles,
                "reject_count": reject_count,
                "efficiency_percent": efficiency,
                "downtime_min": 15 * days_back
            }

            # Вставка отчета
            query = """
                INSERT INTO production_reports 
                (technologist_id, report_type, period_start, period_end, report_object, metrics, is_approved)
                VALUES (%s, %s, %s, %s, %s, %s, FALSE)
                RETURNING report_id, generation_date
            """
            cursor.execute(query, (
                technologist_id,
                report_type,
                period_start,
                period_end,
                f"Auto_Report_{report_type}",
                json.dumps(metrics)
            ))
            result = cursor.fetchone()
            conn.commit()

            logger.info(f"Отчет сформирован ID: {result['report_id']}")
            return {
                "report_id": result['report_id'],
                "metrics": metrics,
                "generated_at": result['generation_date']
            }
        except Exception as e:
            conn.rollback()
            logger.error(f"Ошибка формирования отчета: {e}")
            return {}
        finally:
            cursor.close()
            self._release_connection(conn)

    def close_all_connections(self):
        """Закрытие пула соединений при завершении работы."""
        if self.connection_pool:
            self.connection_pool.closeall()
            logger.info("Все соединения с БД закрыты.")


if __name__ == "__main__":
    # Инициализация системы
    asu = ASUBottlingSystem()

    print("--- АСУ Розлива Напитков: Интеграция с PostgreSQL ---")

    # 1. Аутентификация
    # Логин: tech_lead, Хеш пароля из скрипта: '$2b$12$HashTechLead'
    user = asu.authenticate_user('tech_lead', '$2b$12$HashTechLead')

    if user:
        print(f"\n[OK] Вход выполнен: {user['username']} ({user['role_detail']})")

        # 2. Чтение данных с датчиков
        sensors = asu.get_sensor_readings()
        print(f"\n[INFO] Активных датчиков в системе: {len(sensors)}")
        if sensors:
            print(
                f"Пример показания: Датчик #{sensors[0]['sensor_id']} ({sensors[0]['sensor_type']}) = {sensors[0]['current_value']} {sensors[0]['unit_of_measure']}")

        # 3. Проверка аварий
        alarms = asu.get_unresolved_alarms()
        if alarms:
            print(f"\n[WARNING] Неразрешенных аварий: {len(alarms)}")
            for alarm in alarms[:3]:  # Показать первые 3
                print(f" - {alarm['description']} (Критичность: {alarm['severity']})")
        else:
            print("\n[OK] Активных аварий нет.")

        # 4. Управление механизмом (симуляция запуска насоса)
        # Получаем первый насос из БД
        pumps = asu.get_actuator_status(device_type='PUMP')
        if pumps:
            pump_id = pumps[0]['actuator_id']
            print(f"\n[ACTION] Запуск насоса #{pump_id}...")
            asu.control_actuator(pump_id, 'RUNNING', 'AUTO')

        # 5. Получение активных рецептур
        recipes = asu.get_active_recipes()
        print(f"\n[INFO] Доступно активных рецептур: {len(recipes)}")
        if recipes:
            print(f"Текущая рецептура: {recipes[0]['regulation_name']} (Версия: {recipes[0]['version']})")

        # 6. Формирование отчета
        # Получаем ID технолога tech_lead
        conn = asu._get_connection()
        cur = conn.cursor()
        cur.execute(
            "SELECT technologist_id FROM technologists JOIN users ON technologists.user_id = users.user_id WHERE username = 'tech_lead'")
        tech_id_row = cur.fetchone()
        asu._release_connection(conn)

        if tech_id_row:
            report = asu.generate_production_report(tech_id_row[0], 'DAILY', days_back=1)
            if report:
                print(f"\n[REPORT] Отчет сформирован. Эффективность линии: {report['metrics']['efficiency_percent']}%")

    else:
        print("\n[ERROR] Неверный логин или пароль, либо пользователь неактивен.")

    # Завершение работы
    asu.close_all_connections()
    print("\n--- Работа модуля завершена ---")