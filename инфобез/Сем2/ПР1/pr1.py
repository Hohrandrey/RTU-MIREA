import random

DB_FILE = "users.txt"

def simple_hash(password):
    """
    Хеширование пароля:
    1. Переводим пароль в двоичную запись
    2. Режем на кусочки по 16 бит
    3. Если последний кусок не кратен 16 - добавляем 1 и нули
    4. Добавляем дополнительный блок с длиной исходного пароля в байтах
    """
    block_size = 16

    if isinstance(password, str):
        password = password.encode('utf-8')

    password_length = len(password)

    binary_password = ''
    for byte in password:
        binary_password += format(byte, '08b')


    blocks = []
    for i in range(0, len(binary_password), block_size):
        block = binary_password[i:i+block_size]

        if len(block) < block_size:
            block += '1'
            block = block.ljust(block_size, '0')

        blocks.append(block)


    # Добавляем дополнительный блок с длиной пароля в байтах
    length_block = format(password_length, '016b')  # 16-битное представление длины
    blocks.append(length_block)
    print(f"Блок с длиной пароля: {length_block}")

    # Преобразуем блоки в числа и XOR-им
    result = 0
    for block in blocks:
        # Преобразуем двоичную строку в целое число
        block_value = int(block, 2)
        # Применяем XOR
        result ^= block_value

        print(f"Блок {block} -> {block_value}, промежуточный XOR: {result}")

    return result


def generate_salt():
    return random.randint(0, 2**16+1)


def login_exists(login):
    with open(DB_FILE, 'r', encoding='utf-8') as file:
        for line in file:
            if line.strip():
                stored_login = line.strip().split('\t')[0]
                if stored_login == login:
                    return True
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

    if not found:
        print("Ошибка: Пользователь с таким логином не найден!")
        return False
    return None


def view_database():
    print("\nСодержимое базы данных")


    with open(DB_FILE, 'r', encoding='utf-8') as file:
        content = file.read()
        if content:
            print("Логин\tСумма (соль+хеш)\tСоль")
            for line in content.strip().split('\n'):
                parts = line.split('\t')
                if len(parts) == 3:
                    print(f"{parts[0]}\t{parts[1]}\t\t{parts[2]}")
        else:
            print("База данных пуста")


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