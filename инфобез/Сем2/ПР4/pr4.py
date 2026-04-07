import random
import math


def is_prime(n):
    if n < 2:
        return False
    if n == 2 or n == 3:
        return True
    if n % 2 == 0 or n % 3 == 0:
        return False
    i = 5
    while i * i <= n:
        if n % i == 0 or n % (i + 2) == 0:
            return False
        i += 6
    return True


def generate_prime(min_val, max_val):
    while True:
        num = random.randint(min_val, max_val)
        if is_prime(num):
            return num


def generate_rsa_params():
    min_prime = 50
    max_prime = 200

    while True:
        p = generate_prime(min_prime, max_prime)
        q = generate_prime(min_prime, max_prime)

        if p != q:
            break

    N = p * q
    phi = (p - 1) * (q - 1)

    e = random.randrange(3, phi, 2)
    while math.gcd(e, phi) != 1:
        e = random.randrange(3, phi, 2)

    try:
        d = pow(e, -1, phi)
    except ValueError:
        print("Ошибка вычисления секретного ключа. Генерируем заново...")
        return generate_rsa_params()

    return p, q, N, e, d


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
            print(f"Символ '{char}' не поддерживается")
            continue

        c = pow(m, e, N)
        encrypted_numbers.append(str(c))
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
        else:
            print(f"{c} -> (не соответствует символу)")
            decrypted_text.append('?')

    return ''.join(decrypted_text)

def cyclic_attack_number(c, e, N):
    original_c = c
    current = c
    count = 0

    while True:
        next_val = pow(current, e, N)
        count += 1

        if next_val == original_c:
            return current, count


        current = next_val


def cyclic_attack_text(ciphertext_str, use_russian, e, N):
    try:
        numbers = [int(x) for x in ciphertext_str.split()]
    except ValueError:
        print("Ошибка: Введите целые числа через пробел!")
        return None

    decrypted_text = []


    for i, c in enumerate(numbers):
        res, cycles = cyclic_attack_number(c, e, N)
        char = number_to_char(res, use_russian)
        if char:
            decrypted_text.append(char)
        else:
            decrypted_text.append(f'[{res}]')

    return ''.join(decrypted_text)


def meet_in_the_middle_attack(ciphertext_str, use_russian, e, N):
    try:
        numbers = [int(x) for x in ciphertext_str.split()]
    except ValueError:
        print("Ошибка: Введите целые числа через пробел!")
        return None

    B = 5000
    if N < B * B:
        B = int(math.isqrt(N)) + 1


    decrypted_text = []

    for c in numbers:
        found = False

        table = {}
        for x1 in range(1, B + 1):
            val = pow(x1, e, N)
            table[val] = x1


        for x2 in range(1, B + 1):
            x2_e = pow(x2, e, N)
            try:
                inv_x2_e = pow(x2_e, -1, N)
            except ValueError:
                continue

            target = (c * inv_x2_e) % N

            if target in table:
                x1 = table[target]
                m = (x1 * x2) % N

                char = number_to_char(m, use_russian)
                if char:
                    decrypted_text.append(char)
                    found = True
                    break

        if not found:
            decrypted_text.append('?')
            print(f"Не удалось подобрать пару (x1, x2) для блока {c} в диапазоне до {B}")

    return ''.join(decrypted_text)

def main():
    print("Генерация параметров криптосистемы...")
    p, q, N, e, d = generate_rsa_params()

    print(f"Сгенерированные ключи:")
    print(f"p = {p}, q = {q}")
    print(f"N (модуль) = {N}")
    print(f"e (открытый ключ) = {e}")
    print(f"d (секретный ключ) = {d}")
    print(f"Максимально допустимый код символа: {N - 1}")
    print("-" * 30)

    use_russian = False

    while True:
        print("\nВыберите действие:")
        print("1 - Зашифровать текст")
        print("2 - Расшифровать шифр текст (используя секретный ключ d)")
        print("3 - Переключить алфавит (сейчас: " +
              ("Русский" if use_russian else "Английский") + ")")
        print("4 - Показать текущие ключи")
        print("5 - Циклическая атака (взлом без ключа d)")
        print("6 - Атака 'Встреча посередине'")
        print("0 - Выйти из программы")

        choice = input("Ваш выбор: ").strip()

        if choice == '1':
            plaintext = input("Введите открытый текст: ")

            if not plaintext:
                print("Ошибка: Текст не может быть пустым!")
                continue


            encrypted = encrypt_text(plaintext, use_russian, e, N)

            if encrypted:
                print(f"\nЗашифрованный текст:")
                cipher_str = ' '.join(encrypted)
                print(cipher_str)
            else:
                print("Не удалось зашифровать текст")

        elif choice == '2':
            ciphertext = input("Введите шифр текст (числа через пробел): ").strip()

            print("\nРезультат расшифрования с d:")
            result = decrypt_text(ciphertext, use_russian, d, N)
            if result:
                print(result)

        elif choice == '3':
            use_russian = not use_russian
            print(f"Алфавит переключен на: {'Русский' if use_russian else 'Английский'}")

        elif choice == '4':
            print(f"\nТекущие параметры:")
            print(f"N = {N}, e = {e}, d = {d}")

        elif choice == '5':
            print("\nЦиклическая атака RSA по (e, N):")
            ciphertext = input("Введите шифр текст (числа через пробел): ").strip()

            result = cyclic_attack_text(ciphertext, use_russian, e, N)
            if result:
                print(f"\nРезультат взлома:")
                print(result)
            else:
                print("Атака не удалась.")

        elif choice == '6':
            print("\nАтака Встреча посередине на RSA:")
            ciphertext = input("Введите шифр текст (числа через пробел): ").strip()

            result = meet_in_the_middle_attack(ciphertext, use_russian, e, N)
            if result:
                print(f"\nРезультат взлома:")
                print(result)
            else:
                print("Атака не удалась.")

        elif choice == '0':
            print("Программа завершена.")
            break
        else:
            print("Неверный выбор. Пожалуйста, выберите 1, 2, 3, 4, 5 или 0.")


if __name__ == "__main__":
    main()