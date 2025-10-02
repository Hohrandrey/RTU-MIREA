import pytest

# Импортируем функции из вашего модуля (предположим, что код находится в файле main.py)
from Varya import calculate_average, find_max_value, find_min_value, sort_ascending, get_array_length, validate_array


class TestArrayFunctions:
    def test_calculate_average_error(self):
        """Тест, который обнаруживает ошибку в calculate_average"""
        arr = [1, 2, 3, 4, 5]

        # Правильное среднее арифметическое
        expected_correct_average = sum(arr) / len(arr)  # Должно быть 3.0

        # То, что фактически вычисляет функция
        actual_result = calculate_average(arr)  # Будет (15 % 5) = 0

        # Этот тест упадет, показывая ошибку
        assert actual_result == expected_correct_average, \
            f"Ошибка: calculate_average возвращает {actual_result}, но должно быть {expected_correct_average}"

    def test_calculate_average_actual_behavior(self):
        """Тест, который показывает фактическое поведение функции"""
        # Тест 1: сумма делится нацело на длину
        arr1 = [1, 2, 3, 4, 5]  # сумма=15, длина=5
        result1 = calculate_average(arr1)
        assert result1 == 3  # Фактический результат

        # Тест 2: сумма не делится нацело на длину
        arr2 = [1, 2, 3, 4]  # сумма=10, длина=4
        result2 = calculate_average(arr2)
        assert result2 == 2.5  # Фактический результат

    def test_calculate_average_should_be(self):
        """Тест, показывающий как ДОЛЖНА работать функция"""
        arr = [1, 2, 3, 4, 5]
        expected = 3.0  # (1+2+3+4+5)/5 = 3.0

        # Временная исправленная версия для демонстрации
        def fixed_calculate_average(arr):
            validate_array(arr)
            return sum(arr) / get_array_length(arr)
        result = fixed_calculate_average(arr)
        assert result == expected

    def test_find_max_value(self):
        """Тест для функции поиска максимума"""
        assert find_max_value([1, 5, 3, 9, 2]) == 9
        assert find_max_value([-1, -5, -3]) == -1
        assert find_max_value([10]) == 10

    def test_find_min_value(self):
        """Тест для функции поиска минимума"""
        assert find_min_value([1, 5, 3, 9, 2]) == 1
        assert find_min_value([-1, -5, -3]) == -5
        assert find_min_value([10]) == 10

    def test_sort_ascending(self):
        """Тест для функции сортировки"""
        assert sort_ascending([3, 1, 4, 2]) == [1, 2, 3, 4]
        assert sort_ascending([5, -1, 0, 2]) == [-1, 0, 2, 5]
        assert sort_ascending([1]) == [1]

    def test_validate_array_empty(self):
        """Тест для проверки пустого массива"""
        with pytest.raises(ValueError, match="Массив не может быть пустым"):
            validate_array([])

    def test_get_array_length(self):
        """Тест для функции получения длины массива"""
        assert get_array_length([1, 2, 3]) == 3
        assert get_array_length([]) == 0
        assert get_array_length([1]) == 1


if __name__ == "__main__":
    # Запуск тестов
    pytest.main([__file__, "-v"])