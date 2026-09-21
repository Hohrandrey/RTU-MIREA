from db_connector import get_sensor_data, log_prediction
from model_predictor import PredictiveModel


def main():
    print("Запуск модуля прогнозной диагностики...")

    print("Сбор данных с датчиков...")
    sensor_data = get_sensor_data()

    if sensor_data.empty:
        print("Нет данных для анализа или ошибка подключения.")
        return

    print(f"Получено данных с {len(sensor_data)} датчиков.")
    print(sensor_data.head())

    print("\nАнализ трендов и выявление аномалий...")
    predictor = PredictiveModel()
    predictions = predictor.analyze(sensor_data)

    critical_count = 0
    warning_count = 0

    for sensor_id, risk in predictions.items():
        if risk == 'HIGH':
            print(f"КРИТИЧЕСКОЕ ВНИМАНИЕ: Датчик #{sensor_id} - Риск отказа: {risk}")
            log_prediction(sensor_id, risk)
            critical_count += 1
        elif risk == 'MEDIUM':
            print(f"ПРЕДУПРЕЖДЕНИЕ: Датчик #{sensor_id} - Риск отказа: {risk}")
            log_prediction(sensor_id, risk)
            warning_count += 1

    print("\n--- Итоги диагностики ---")
    if critical_count == 0 and warning_count == 0:
        print("Критических отклонений не выявлено. Система работает штатно.")
    else:
        print(f"Выявлено проблем: {critical_count} критических, {warning_count} предупреждений.")
        print("Логи записаны в таблицу system_events.")


if __name__ == "__main__":
    main()