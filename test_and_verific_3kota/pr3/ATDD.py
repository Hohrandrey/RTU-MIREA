import unittest
import os
from datetime import datetime
from var33 import HabitTracker


class TestHabitTrackerLogic(unittest.TestCase):

    def setUp(self):
        self.test_filename = "test_habits.json"
        self.tracker = HabitTracker(self.test_filename)

    def tearDown(self):
        if os.path.exists(self.test_filename):
            os.remove(self.test_filename)

    def test_mark_completed_today(self):
        """Тест отметки выполнения привычки на сегодня"""
        self.tracker.add_habit("Чтение", "Читать 30 минут в день")
        self.tracker.mark_completed("Чтение")

        habit = self.tracker.habits["Чтение"]
        today = datetime.now().strftime("%Y-%m-%d")

        self.assertIn(today, habit['completions'])
        self.assertEqual(habit['total_completed'], 1)

    def test_mark_completed_twice_same_day(self):
        """Тест попытки отметить выполнение дважды в один день"""
        self.tracker.add_habit("Спорт", "Тренировка 20 минут")
        self.tracker.mark_completed("Спорт")
        self.tracker.mark_completed("Спорт")

        habit = self.tracker.habits["Спорт"]
        today = datetime.now().strftime("%Y-%m-%d")

        self.assertEqual(habit['completions'].count(today), 1)
        self.assertEqual(habit['total_completed'], 1)

    def test_mark_completed_nonexistent_habit(self):
        """Тест попытки отметить выполнение несуществующей привычки"""
        self.tracker.mark_completed("Несуществующая привычка")

        self.assertNotIn("Несуществующая привычка", self.tracker.habits)


if __name__ == '__main__':
    unittest.main()