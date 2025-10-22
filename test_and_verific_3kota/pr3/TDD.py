import unittest
import os
from datetime import datetime, timedelta
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

    def test_mark_completed_new_habit(self):
        """Тест отметки выполнения для новой привычки"""
        self.tracker.add_habit("test_habit", "test description")
        self.tracker.mark_completed("test_habit")

        habit = self.tracker.habits["test_habit"]
        today = datetime.now().strftime("%Y-%m-%d")

        self.assertIn(today, habit['completions'])
        self.assertEqual(habit['total_completed'], 1)

    def test_mark_completed_nonexistent_habit(self):
        """Тест отметки выполнения для несуществующей привычки"""
        result = self.tracker.mark_completed("nonexistent")
        self.assertFalse(result)

    def test_mark_completed_twice_same_day(self):
        """Тест повторной отметки выполнения в тот же день"""
        self.tracker.add_habit("test_habit")
        self.tracker.mark_completed("test_habit")
        self.tracker.mark_completed("test_habit")

        habit = self.tracker.habits["test_habit"]
        self.assertEqual(habit['total_completed'], 1)

    def test_streak_calculation(self):
        """Тест расчета серий выполнения"""
        self.tracker.add_habit("test_habit")
        habit = self.tracker.habits["test_habit"]

        test_dates = [
            (datetime.now() - timedelta(days=2)).strftime("%Y-%m-%d"),
            (datetime.now() - timedelta(days=1)).strftime("%Y-%m-%d"),
            datetime.now().strftime("%Y-%m-%d")
        ]
        habit['completions'] = test_dates
        self.tracker.update_streak("test_habit")
        self.assertEqual(habit['streak'], 3)

        test_dates = [
            (datetime.now() - timedelta(days=3)).strftime("%Y-%m-%d"),
            (datetime.now() - timedelta(days=1)).strftime("%Y-%m-%d"),
            datetime.now().strftime("%Y-%m-%d")
        ]
        habit['completions'] = test_dates
        self.tracker.update_streak("test_habit")
        self.assertEqual(habit['streak'], 2)

    def test_multiple_habits_independent_stats(self):
        """Тест независимости статистики для разных привычек"""
        self.tracker.add_habit("habit1")
        self.tracker.add_habit("habit2")
        self.tracker.mark_completed("habit1")

        habit1 = self.tracker.habits["habit1"]
        habit2 = self.tracker.habits["habit2"]

        self.assertEqual(habit1['total_completed'], 1)
        self.assertEqual(habit2['total_completed'], 0)


if __name__ == '__main__':
    unittest.main()