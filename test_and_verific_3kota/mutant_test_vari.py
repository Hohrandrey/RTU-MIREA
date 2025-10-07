import sys

import pytest
from io import StringIO
from Varya_mutant import *

class TestArrayFunctions:

    def test_get_array_length(self):
        """Тест для функции получения длины массива"""
        assert get_array_length([1, 2, 3]) == 3
        assert get_array_length([]) == 0
        assert get_array_length([1]) == 1

    def test_calculate_average_error(self):
        """Тест, который обнаруживает ошибку в calculate_average"""
        arr = [1, 2, 3, 4, 5]

        expected_correct_average = sum(arr) / len(arr)

        actual_result = calculate_average(arr)

        assert actual_result == expected_correct_average

    def test_calculate_average_actual_behavior(self):
        """Тест, который показывает фактическое поведение функции"""

        arr1 = [1, 2, 3, 4, 5]
        result1 = calculate_average(arr1)
        assert result1 == 3

        arr2 = [1, 2, 3, 4]
        result2 = calculate_average(arr2)
        assert result2 == 2.5

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

    def test_input_array(self, monkeypatch):
        """Тест для функции ввода"""
        monkeypatch.setattr('sys.stdin', StringIO("1 2 3\n"))
        assert input_array() == [1.0, 2.0, 3.0]

        monkeypatch.setattr('sys.stdin', StringIO("-1 -2.5 3\n"))
        assert input_array() == [-1.0, -2.5, 3.0]

        input_data = "abc 123\n1 2 3\n"
        monkeypatch.setattr('sys.stdin', StringIO(input_data))

        mock_stdout = StringIO()
        monkeypatch.setattr(sys,'stdout', mock_stdout)

        result = input_array()
        assert result == [1.0, 2.0, 3.0]
        assert "Ошибка: введите только числа, разделенные пробелами!" in mock_stdout.getvalue()

        input_data = "\n1 2 3\n"
        monkeypatch.setattr('sys.stdin', StringIO(input_data))

        mock_stdout = StringIO()
        monkeypatch.setattr(sys, 'stdout', mock_stdout)

        result = input_array()
        assert result == [1.0, 2.0, 3.0]
        assert "Ошибка: введите хотя бы одно число!" in mock_stdout.getvalue()


if __name__ == "__main__":
    pytest.main([__file__, "-v"])