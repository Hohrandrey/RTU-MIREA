import paho.mqtt.client as mqtt
import json
from datetime import datetime
import threading

# Параметры подключения к MQTT-брокеру
HOST = "192.168.1.22"  # IP чемодана
PORT = 1883  # Стандартный порт подключения для Mosquitto
KEEPALIVE = 60  # Время ожидания доставки сообщения

# Словарь с топиками и собираемыми из них параметрами
SUB_TOPICS = {
    '/devices/wb-msw-v3_64/controls/Sound Level': 'Sound Level',
    '/devices/wb-msw-v3_64/controls/Illuminance': 'Illuminance',
    '/devices/battery/controls/Voltage': 'Voltage'
}

JSON_LIST = []

# Создание словаря для хранения данных JSON
JSON_DICT = {}
for value in SUB_TOPICS.values():
    JSON_DICT[value] = 0


def on_connect(client, userdata, flags, rc):
    """ Функция, вызываемая при подключении к брокеру """
    print("Connected with result code " + str(rc))

    # Подключение ко всем заданным выше топикам
    for topic in SUB_TOPICS.keys():
        client.subscribe(topic)


def on_message(client, userdata, msg):
    """ Функция, вызываемая при получении сообщения от брокера """
    payload = msg.payload.decode()  # Основное значение
    topic = msg.topic  # Топик, из которого пришло сообщение

    param_name = SUB_TOPICS[topic]
    JSON_DICT[param_name] = payload
    JSON_DICT['time'] = str(datetime.now())

    print(topic + " " + payload)


def save_data_periodically():
    """ Сохраняет данные в файл каждые 5 секунд """
    JSON_LIST.append(JSON_DICT.copy())
    with open('data.json', 'w') as file:
        json_string = json.dumps(JSON_LIST)
        file.write(json_string)
    # Запланировать следующий вызов через 5 секунд
    timer = threading.Timer(5.0, save_data_periodically)
    timer.daemon = True
    timer.start()


def main():
    # Создание и настройка экземпляра класса Client для подключения к Mosquitto
    client = mqtt.Client()
    client.on_connect = on_connect
    client.on_message = on_message
    client.connect(HOST, PORT, KEEPALIVE)

    # Запуск периодической записи данных
    save_data_periodically()

    client.loop_forever()  # Бесконечный внутренний цикл клиента в ожидании сообщений


if __name__ == "__main__":
    main()