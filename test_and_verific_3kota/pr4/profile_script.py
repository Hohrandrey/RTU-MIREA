# -*- coding: utf-8 -*-
import sys
import io
import line_profiler
import atexit

# Исправляем кодировку
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
sys.stderr = io.TextIOWrapper(sys.stderr.buffer, encoding='utf-8')

profiler = line_profiler.LineProfiler()
atexit.register(profiler.print_stats)

@profiler
def add(a, b):
    print(a, '+', b, '=', a + b)

@profiler
def subtraction(a, b):
    print(a, '-', b, '=', a - b)

@profiler
def multiply(a, b):
    print(a, '*', b, '=', a * b)

@profiler
def divide(a, b):
    if b != 0:
        print(a, '/', b, '=', a / b)
    else:
        print('Делить на 0 нельзя')

@profiler
def check_action(act):
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

# Основной код
print('"+" - сложить два числа')
print('"-" - вычесть из первого числа второе')
print('"*" - перемножить два числа')
print('"/" - разделить первое число на второе')
print('Чтобы выйти введите - "0"')

act = input("выберите действие: ").strip()
while act != '0':
    try:
        check_action(act)
        act = input("выберите действие: ").strip()
    except:
        print("Введено не число")