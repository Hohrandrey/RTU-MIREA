import unittest
import os
from datetime import datetime
from pr3.var33 import HabitTracker


class TestHabitTrackerLogic(unittest.TestCase):

    def setUp(self):
        """Создание временного файла test_habits.json для тестов"""
        self.test_filename = "test_habits.json"
        self.tracker = HabitTracker(self.test_filename)

    def tearDown(self):
        """Удаляет временный файл test_habits.json, если он существует"""
        if os.path.exists(self.test_filename):
            os.remove(self.test_filename)

    def test_add_habit_and_check_initial_status(self):
        """Тест добавления привычки и проверки начального статуса (не выполнена)"""
        self.tracker.add_habit("Чтение", "Читать 30 минут в день")
        habit = self.tracker.habits["Чтение"]
        self.assertEqual(habit['total_completed'], 0)

    def test_mark_completed_and_check_status(self):
        """Тест отметки выполнения и проверки статуса (выполнена)"""
        self.tracker.add_habit("Спорт", "Тренировка 20 минут")

        habit = self.tracker.habits["Спорт"]

        self.tracker.mark_completed("Спорт")

        self.assertEqual(habit['total_completed'], 1)

    def test_mark_completed_nonexistent_habit(self):
        """Тест попытки отметить выполнение несуществующей привычки"""
        self.tracker.mark_completed("Несуществующая привычка")
        self.assertNotIn("Несуществующая привычка", self.tracker.habits)

    def test_double_completion_same_day(self):
        """Тест двойной отметки выполнения в один день"""
        self.tracker.add_habit("Медитация", "Медитировать 10 минут")

        self.tracker.mark_completed("Медитация")
        self.tracker.mark_completed("Медитация")

        habit = self.tracker.habits["Медитация"]

        self.assertEqual(habit['total_completed'], 1)


if __name__ == '__main__':
    unittest.main()