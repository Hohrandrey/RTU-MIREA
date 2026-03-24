p = 139
q = 191
n = p * q

def encrypt(m):
    print(f"Исходный текст: {m}")
    print(f"p = {p}, q = {q}, n = {n}\n")

    if len(m) != 1:
        print("Ошибка: шифрование возможно только для одного символа!")
        return None

    ascii_codes = [ord(char) for char in m]
    binary_representations = [bin(code)[2:].zfill(8) for code in ascii_codes]

    for char, code in zip(m, ascii_codes):
        print(f"   '{char}' -> {code}")

    for char, binary in zip(m, binary_representations):
        print(f"   '{char}' -> {binary}")

    concatenated_binary = ''.join(binary_representations)

    decimal_result = int(concatenated_binary, 2)

    binary_back = bin(decimal_result)[2:]

    konkatenized  = binary_back + binary_back

    decimal_konkatenized  = int(konkatenized, 2)

    c = (decimal_konkatenized**2)%n

    print("Результат зашифрования:", c)


def decrypt(c):
    p1 = pow(p, -1,q)
    q1 = pow(q, -1, p)
    print(p1)
    print(q1)
    cp = pow(c, (p + 1) // 4, p)
    cq = pow(c, (q + 1) // 4, q)
    print(cp)
    print(cq)

    r1 = (cp * q * q1 + cq * p * p1) % n
    r2 = n - r1
    r3 = (cp * q * q1 - cq * p * p1) % n
    r4 = n - r3

    print(f"\nВозможные расшифрованные значения: {r1}, {r2}, {r3}, {r4}")

    for candidate in [r1, r2, r3, r4]:
        binary_candidate = bin(candidate)[2:]
        length = len(binary_candidate)

        if length % 2 == 0:
            original_binary = binary_candidate[:length // 2]
            sec_bin = binary_candidate[length // 2:]
            if original_binary == sec_bin:
                if len(original_binary) % 8 != 0:
                    original_binary = original_binary.zfill(((len(original_binary) // 8) + 1) * 8)
                decimal_value = int(original_binary, 2)
                character = chr(decimal_value)
                print(f"Значение: {candidate} -> Символ: '{character}'")



while True:
        print("\nМеню:")
        print("1. Зашифрование")
        print("2. Расшифрование")
        print("3. Выход")
        choice = input("\nВыберите действие (1-3): ").strip()

        if choice == '1':
            m = input("Введите текст для шифрования: ")
            if m:
                encrypt(m)
            else:
                print("Ошибка: текст не может быть пустым!")
        elif choice == '2':
            try:
                c = int(input("Введите число для расшифрования: "))
                decrypt(c)
            except ValueError:
                print("Ошибка: введите корректное число!")

        elif choice == '3':
            print("Выход из программы. До свидания!")
            break

        else:
            print("Ошибка: выберите 1, 2 или 3")