import pandas as pd
from sqlalchemy import create_engine
from config import DB_CONFIG

DATABASE_URL = f"postgresql://{DB_CONFIG['user']}:{DB_CONFIG['password']}@" \
               f"{DB_CONFIG['host']}:{DB_CONFIG['port']}/{DB_CONFIG['database']}"

engine = create_engine(DATABASE_URL)


def get_sensor_data() -> pd.DataFrame:
    """
    Получает текущие данные со всех активных датчиков для анализа.
    Возвращает DataFrame с колонками: sensor_id, current_value, sensor_type
    """
    try:
        query = """
            SELECT sensor_id, current_value, sensor_type 
            FROM industrial_sensors 
            WHERE is_operational = TRUE
        """
        df = pd.read_sql_query(query, engine)
        return df

    except Exception as e:
        print(f"Ошибка подключения к БД или выполнения запроса: {e}")
        return pd.DataFrame()


def log_prediction(sensor_id: int, risk_level: str):
    """Записывает результат прогноза в журнал событий (system_events)."""
    conn = None
    try:
        conn = engine.connect()

        trans = conn.begin()

        description = f"Прогноз отказа: риск {risk_level} (Sensor ID: {sensor_id})"

        from sqlalchemy import text
        sql_query = text("""
            INSERT INTO system_events 
            (event_type, event_code, description, severity, source, is_resolved, occurrence_time)
            VALUES (:etype, :ecode, :desc, :sev, :src, :resolved, NOW())
        """)

        conn.execute(sql_query, {
            "etype": 'WARNING',
            "ecode": f'PRED_{sensor_id}',
            "desc": description,
            "sev": 2,
            "src": 'AI_Diagnostic_Module',
            "resolved": False
        })

        trans.commit()
        print(f"Лог записан для датчика #{sensor_id}: {risk_level}")

    except Exception as e:
        print(f"Ошибка записи лога: {e}")
        if conn:
            trans.rollback()
    finally:
        if conn:
            conn.close()