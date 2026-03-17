
def char_to_number(char, use_russian):
    if use_russian:
        russian_lower = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя'
        russian_upper = 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ'

        if char in russian_lower:
            return russian_lower.index(char) + 1
        elif char in russian_upper:
            return russian_upper.index(char) + 1
        else:
            return -1
    else:
        if char.islower():
            return ord(char) - ord('a') + 1
        elif char.isupper():
            return ord(char) - ord('A') + 1
        else:
            return -1


def number_to_char(number, use_russian):
    if use_russian:
        russian_upper = 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ'
        if 1 <= number <= 33:
            return russian_upper[number - 1]
    else:
        if 1 <= number <= 26:
            return chr(number + ord('A') - 1)

    return None


def encrypt_text(plaintext, use_russian, e, N):
    encrypted_numbers = []

    for char in plaintext:
        if char == ' ':
            continue

        m = char_to_number(char, use_russian)

        if m == -1:
            print(f"Символ '{char}' не поддерживается и будет пропущен")
            continue

        c = pow(m, e, N)
        encrypted_numbers.append(str(c))
        print(f"'{char}' -> {c}")

    return encrypted_numbers


def decrypt_text(ciphertext, use_russian, d, N):
    try:
        numbers = [int(x) for x in ciphertext.split()]
    except ValueError:
        print("Ошибка: Введите целые числа через пробел!")
        return None

    decrypted_text = []

    for c in numbers:
        m = pow(c, d, N)
        char = number_to_char(m, use_russian)

        if char:
            decrypted_text.append(char)
            print(f"{c} -> '{char}'")
        else:
            print(f"{c} -> (не соответствует символу)")
            decrypted_text.append('?')

    return ''.join(decrypted_text)


def main():
    p = 17
    q = 19
    N = 323
    e = 11
    d = 131

    use_russian = False

    print("=" * 50)
    print("ЭЛЕМЕНТАРНЫЙ RSA АЛГОРИТМ")
    print(f"Параметры: p={p}, q={q}, N={N}, e={e}, d={d}")
    print("=" * 50)

    while True:
        print("\nВыберите действие:")
        print("1 - Зашифровать текст")
        print("2 - Расшифровать шифртекст")
        print("3 - Переключить алфавит (сейчас: " +
              ("Русский" if use_russian else "Английский") + ")")
        print("0 - Выйти из программы")

        choice = input("Ваш выбор: ").strip()

        if choice == '1':
            plaintext = input("Введите открытый текст: ")

            if not plaintext:
                print("Ошибка: Текст не может быть пустым!")
                continue

            print("\nРезультат шифрования:")
            encrypted = encrypt_text(plaintext, use_russian, e, N)

            if encrypted:
                print(f"\nЗашифрованный текст:")
                print(' '.join(encrypted))
            else:
                print("Не удалось зашифровать текст")

        elif choice == '2':
            ciphertext = input("Введите шифртекст (числа через пробел): ").strip()

            print("\nРезультат расшифрования:")
            print(decrypt_text(ciphertext, use_russian, d, N))


        elif choice == '3':
            use_russian = not use_russian
            print(f"Алфавит переключен на: {'Русский' if use_russian else 'Английский'}")

        elif choice == '0':
            print("Программа завершена.")
            break
        else:
            print("Неверный выбор. Пожалуйста, выберите 1, 2, 3 или 0.")


if __name__ == "__main__":
    main()
