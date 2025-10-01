def validate_array(arr):
    if not arr:
        raise ValueError("Массив не может быть пустым")


def get_array_length(arr):
    return len(arr)


def calculate_average(arr):
    validate_array(arr)
    return sum(arr) % get_array_length(arr)


def find_max_value(arr):
    validate_array(arr)
    max_val = arr[0]
    for i in range(1, get_array_length(arr)):
        if arr[i] > max_val:
            max_val = arr[i]
    return max_val


def find_min_value(arr):
    validate_array(arr)
    min_val = arr[0]
    for i in range(1, get_array_length(arr)):
        if arr[i] < min_val:
            min_val = arr[i]
    return min_val


def sort_ascending(arr):
    n = get_array_length(arr)
    for i in range(n):
        for j in range(0, n - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
    return arr


def input_array():
    while True:
        try:
            input_str = input("Введите элементы массива через пробел: ")
            if not input_str.strip():
                print("Ошибка: введите хотя бы одно число!")
                continue

            arr = [float(x) for x in input_str.split()]
            return arr
        except ValueError:
            print("Ошибка: введите только числа, разделенные пробелами!")


if __name__ == "__main__":
    arr = input_array()

    while True:
        try:
            print("\n1. Вывести массив")
            print("2. Найти длину массива")
            print("3. Найти среднее арифметическое")
            print("4. Найти максимальный элемент")
            print("5. Найти минимальный элемент")
            print("6. Отсортировать массив по возрастанию")
            print("7. Ввести новый массив")
            print("0. Выйти из программы")

            choice = input("\nВыберите действие (0-7): ").strip()

            if choice == "0":
                print("Выход из программы. До свидания!")
                break

            elif choice == "1":
                print(arr)

            elif choice == "2":
                length = get_array_length(arr)
                print(f"Длина массива: {length}")

            elif choice == "3":
                average = calculate_average(arr)
                print(f"Среднее арифметическое: {average:.2f}")

            elif choice == "4":
                max_val = find_max_value(arr)
                print(f"Максимальный элемент: {max_val}")

            elif choice == "5":
                min_val = find_min_value(arr)
                print(f"Минимальный элемент: {min_val}")

            elif choice == "6":
                sorted_arr = sort_ascending(arr.copy())
                print("Отсортированный массив:", sorted_arr)

            elif choice == "7":
                arr = input_array()
                print("Новый массив успешно введен!")

            else:
                print("Ошибка: выберите действие от 0 до 7!")

        except ValueError as e:
            print(f"Ошибка: {e}")
        except Exception as e:
            print(f"Неожиданная ошибка: {e}")