russian_upper = {
    'А': '0000000', 'Б': '0000001', 'В': '0000010', 'Г': '0000011', 'Д': '0000100',
    'Е': '0000101', 'Ё': '0000110', 'Ж': '0000111', 'З': '0001000', 'И': '0001001',
    'Й': '0001010', 'К': '0001011', 'Л': '0001100', 'М': '0001101', 'Н': '0001110',
    'О': '0001111', 'П': '0010000', 'Р': '0010001', 'С': '0010010', 'Т': '0010011',
    'У': '0010100', 'Ф': '0010101', 'Х': '0010110', 'Ц': '0010111', 'Ч': '0011000',
    'Ш': '0011001', 'Щ': '0011010', 'Ъ': '0011011', 'Ы': '0011100', 'Ь': '0011101',
    'Э': '0011110', 'Ю': '0011111', 'Я': '0100000'
}

russian_lower = {
    'а': '0100001', 'б': '0100010', 'в': '0100011', 'г': '0100100', 'д': '0100101',
    'е': '0100110', 'ё': '0100111', 'ж': '0101000', 'з': '0101001', 'и': '0101010',
    'й': '0101011', 'к': '0101100', 'л': '0101101', 'м': '0101110', 'н': '0101111',
    'о': '0110000', 'п': '0110001', 'р': '0110010', 'с': '0110011', 'т': '0110100',
    'у': '0110101', 'ф': '0110110', 'х': '0110111', 'ц': '0111000', 'ч': '0111001',
    'ш': '0111010', 'щ': '0111011', 'ъ': '0111100', 'ы': '0111101', 'ь': '0111110',
    'э': '0111111', 'ю': '1000000', 'я': '1000001'
}

english_upper = {
    'A': '1000010', 'B': '1000011', 'C': '1000100', 'D': '1000101', 'E': '1000110',
    'F': '1000111', 'G': '1001000', 'H': '1001001', 'I': '1001010', 'J': '1001011',
    'K': '1001100', 'L': '1001101', 'M': '1001110', 'N': '1001111', 'O': '1010000',
    'P': '1010001', 'Q': '1010010', 'R': '1010011', 'S': '1010100', 'T': '1010101',
    'U': '1010110', 'V': '1010111', 'W': '1011000', 'X': '1011001', 'Y': '1011010',
    'Z': '1011011'
}

english_lower = {
    'a': '1011100', 'b': '1011101', 'c': '1011110', 'd': '1011111', 'e': '1100000',
    'f': '1100001', 'g': '1100010', 'h': '1100011', 'i': '1100100', 'j': '1100101',
    'k': '1100110', 'l': '1100111', 'm': '1101000', 'n': '1101001', 'o': '1101010',
    'p': '1101011', 'q': '1101100', 'r': '1101101', 's': '1101110', 't': '1101111',
    'u': '1110000', 'v': '1110001', 'w': '1110010', 'x': '1110011', 'y': '1110100',
    'z': '1110101'
}

punctuation = {
    ' ': '1110110', ',': '1110111', '.': '1111000', '!': '1111001', '?': '1111010',
    ':': '1111011', '-': '1111100', '(': '1111101', ')': '1111110', '\n': '1111111'
}

alphabet = {}
alphabet.update(russian_upper)
alphabet.update(russian_lower)
alphabet.update(english_upper)
alphabet.update(english_lower)
alphabet.update(punctuation)

reverse_alphabet = {v: k for k, v in alphabet.items()}

def text_to_binary(text):
    bin_text = ''
    for i in text:
        if i in alphabet:
            bin_text += alphabet[i]
    return bin_text

def binary_to_text(bin_text):
    text = ''
    for i in range(0, len(bin_text), 7):
        binary_i = bin_text[i:i + 7]
        if binary_i in reverse_alphabet:
            text += reverse_alphabet[binary_i]
    return text

def x_or(bin_code):
    result = ''
    gamma_text = '1' * len(bin_code)
    for i in range(len(bin_code)):
        result += str(int(bin_code[i]) ^ int(gamma_text[i]))
    return result


def encryption():
    with open('OpenText.txt', 'r', encoding='utf-8') as OpenText:
        text = OpenText.read()
        bin_text = text_to_binary(text)
        x_or_text = x_or(bin_text)
        EncryptedText = binary_to_text(x_or_text)
        with open('EncryptedText.txt', 'w', encoding='utf-8') as file:
            file.write(EncryptedText)


def decryption():
    with open('EncryptedText.txt', 'r', encoding='utf-8') as EncryptedText:
        text = EncryptedText.read()
        bin_text = text_to_binary(text)
        x_or_text = x_or(bin_text)
        EncryptedText = binary_to_text(x_or_text)
        with open('OpenText-res.txt', 'w', encoding='utf-8') as file:
            file.write(EncryptedText)


while True:
    print('\n====Выберите действие====')
    print('1 - Зашифровать')
    print('2 - Расшифровать')
    print('3 - Завершить программу')
    match int(input('Введите номер: ')):
        case 1:
            encryption()
        case 2:
            decryption()
        case 3:
            break
        case _:
            print("Неверный выбор. Попробуйте снова.")