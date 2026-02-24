import random

DB_FILE = "users.txt"


def custom_hash(text, z0=0):
    if isinstance(text, str):
        text = text.encode('utf-8')

    bits = ''
    for byte in text:
        bits += format(byte, '08b')

    blocks = []
    for i in range(0, len(bits), 16):
        block_bits = bits[i:i + 16]

        if len(block_bits) < 16:
            block_bits = block_bits + '1' + '0' * (15 - len(block_bits))

        blocks.append(int(block_bits, 2))

    length = len(text)
    length_block = length & 0xFFFF
    blocks.append(length_block)

    z = z0 & 0xFFFF
    for block in blocks:
        z = (z ^ block) & 0xFFFF

    return f"{z:04X}"


def simple_hash(password):
    hash_hex = custom_hash(password, z0=0)
    return int(hash_hex, 16)


def generate_salt():
    return random.randint(0, 2 ** 16 + 1)


def login_exists(login):
    try:
        with open(DB_FILE, 'r', encoding='utf-8') as file:
            for line in file:
                if line.strip():
                    stored_login = line.strip().split('\t')[0]
                    if stored_login == login:
                        return True
    except FileNotFoundError:
        return False
    return False


def register():
    print("\nРегистрация")

    login = input("Введите логин: ").strip()

    if login_exists(login):
        print("Ошибка: Этот логин уже занят!")
        return False

    password = input("Введите пароль (минимум 10 символов): ")

    if len(password) < 10:
        print("Ошибка: Пароль должен содержать минимум 10 символов!")
        return False

    password_hash = simple_hash(password)
    print(f"Значение хеш-функции: {password_hash}")

    salt = generate_salt()
    print(f"Сгенерированная соль: {salt}")

    total_sum = salt + password_hash

    with open(DB_FILE, 'a', encoding='utf-8') as file:
        file.write(f"{login}\t{total_sum}\t{salt}\n")

    print("Регистрация успешно завершена!")
    return True


def login_user():
    print("\nАвторизация")

    login = input("Введите логин: ").strip()

    found = False
    try:
        with open(DB_FILE, 'r', encoding='utf-8') as file:
            for line in file:
                if line.strip():
                    stored_login, stored_sum, stored_salt = line.strip().split('\t')

                    if stored_login == login:
                        found = True
                        stored_sum = int(stored_sum)
                        stored_salt = int(stored_salt)
                        password = input("Введите пароль: ")

                        password_hash = simple_hash(password)

                        if stored_sum == stored_salt + password_hash:
                            print("Авторизация успешна! Добро пожаловать!")
                            return True
                        else:
                            print("Ошибка: Неверный пароль!")
                            return False
    except FileNotFoundError:
        print("Ошибка: База данных не найдена!")
        return False

    if not found:
        print("Ошибка: Пользователь с таким логином не найден!")
        return False
    return None


def view_database():
    print("\nСодержимое базы данных")

    try:
        with open(DB_FILE, 'r', encoding='utf-8') as file:
            content = file.read()
            if content:
                print("Логин\tСумма (соль+хеш)\tСоль")
                for line in content.strip().split('\n'):
                    parts = line.split('\t')
                    if len(parts) == 3:
                        login, total_sum, salt = parts
                        total_sum = int(total_sum)
                        salt = int(salt)
                        print(f"{login}\t{total_sum}\t\t{salt}")
            else:
                print("База данных пуста")
    except FileNotFoundError:
        print("База данных не существует")





def main():

    while True:
        print("\n" + "=" * 35)
        print("Главное меню")
        print("1. Регистрация")
        print("2. Авторизация")
        print("3. Просмотр базы данных (отладка)")
        print("4. Выход")

        choice = input("Выберите действие (1-4): ").strip()

        if choice == '1':
            register()
        elif choice == '2':
            login_user()
        elif choice == '3':
            view_database()
        elif choice == '4':
            print("Программа завершена.")
            break
        else:
            print("Неверный выбор. Пожалуйста, выберите 1-4.")


if __name__ == "__main__":
    main()