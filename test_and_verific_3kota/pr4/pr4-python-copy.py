def add(a, b):
    print(a, '+', b, '=', a + b)


def  subtraction(a, b):  # Лишний пробел перед именем функции (нарушение PEP8)
    print(a, '-', b, '=',a - b)


def multiply(a, b):
    print(a, '*', b, '=', a * b)
    result = a * b # Неиспользуемая переменная


def divide(a, b):
    if b != 0:
        print(a, '/', b, '=', a / b)
    else:
        print('Делить на 0 нельзя')


def    check_action(act):  # Лишние пробелы перед именем функции (нарушение PEP8)
    if act not in ['+', '-', '*', '/']:
        print('Такого действия нет')
    else:
        a = float(input("введите первое число: "))
        b = float(input("введите второе число: "))
        match act:
            case '+':
                add(a, b)
            case '-':
                subtraction(a, b)
            case '*':
                multiply(a, b)
            case '/':
                divide(a, b)


print('"+" - сложить два числа \n"-" - вычесть из первого числа второе')
print('"*" - перемножить два числа \n"/" - разделить первое число на второе')
print('Чтобы выйти введите - "0"')
act = input("выберите действие: ").strip()

# бесконечный цикл
while True:
    try:
        check_action(act)
        act = input("выберите действие: ").strip()
    except:
        print("Введено не число")


#Неиспользуемая переменная
unused_variable = "Этот код никогда не используется"
