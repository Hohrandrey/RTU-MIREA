import unittest
import os
from datetime import datetime
from pr3.var33 import HabitTracker


class TestHabitTrackerLogic(unittest.TestCase):

    def setUp(self):
        self.test_filename = "test_habits.json"
        self.tracker = HabitTracker(self.test_filename)

    def tearDown(self):
        if os.path.exists(self.test_filename):
            os.remove(self.test_filename)

    def test_add_drawing_habit_and_check_initial_status(self):
        """Тест добавления привычки рисования и проверки начального статуса (не выполнена) на основе таблицы спецификаций"""
        self.tracker.add_habit("Рисование", "Рисовать 15 минут в день")
        habit = self.tracker.habits["Рисование"]
        self.assertEqual(habit['total_completed'], 0)

    def test_calligraphy_habit_complete_cycle(self):
        """Тест полного цикла выполнения привычки чистописания на основе таблицы спецификаций"""
        self.tracker.add_habit("Чистописание", "Практика каллиграфии 10 минут")

        habit = self.tracker.habits["Чистописание"]
        self.assertEqual(habit['total_completed'], 0)

        self.tracker.mark_completed("Чистописание")

        self.assertEqual(habit['total_completed'], 1)

    def test_check_status_nonexistent_habit(self):
        """Тест проверки статуса несуществующей привычки на основе таблицы спецификаций"""
        self.tracker.mark_completed("Несуществующая привычка")
        self.assertNotIn("Несуществующая привычка", self.tracker.habits)

    def test_breathing_practices_double_completion(self):
        """Тест многократного выполнения дыхательных практик на основе таблицы спецификаций"""
        self.tracker.add_habit("Дыхательные практики", "Дышать глубоко 5 минут")

        self.tracker.mark_completed("Дыхательные практики")
        self.tracker.mark_completed("Дыхательные практики")

        habit = self.tracker.habits["Дыхательные практики"]
        today = datetime.now().strftime("%Y-%m-%d")

        self.assertEqual(habit['completions'].count(today), 1)


if __name__ == '__main__':
    unittest.main()