import json
import os
from datetime import datetime


class HabitTracker:
    def __init__(self, filename="habits.json"):
        self.filename = filename
        self.habits = self.load_habits()

    def load_habits(self):
        """Загрузка привычек из файла"""
        if os.path.exists(self.filename):
            try:
                with open(self.filename, 'r', encoding='utf-8') as f:
                    return json.load(f)
            except:
                return {}
        return {}

    def save_habits(self):
        """Сохранение привычек в файл"""
        with open(self.filename, 'w', encoding='utf-8') as f:
            json.dump(self.habits, f, ensure_ascii=False, indent=2)

    def add_habit(self, name, description=""):
        """Добавление новой привычки"""
        if name in self.habits:
            print(f"Привычка '{name}' уже существует!")
        else:
            self.habits[name] = {
                'description': description,
                'created_date': datetime.now().strftime("%Y-%m-%d"),
                'completions': [],
                'streak': 0,
                'total_completed': 0
            }
            self.save_habits()
            print(f"Привычка '{name}' успешно добавлена!")

    def mark_completed(self, name):
        """Отметка выполнения привычки"""
        if name not in self.habits:
            print(f"Привычка '{name}' не найдена!")
        else:
            today = datetime.now().strftime("%Y-%m-%d")
            habit = self.habits[name]

            if today in habit['completions']:
                print(f"Привычка '{name}' уже выполнена сегодня!")
            else:
                habit['completions'].append(today)
                habit['total_completed'] += 1

                self.update_streak(name)

                self.save_habits()
                print(f"Привычка '{name}' отмечена как выполненная!")

    def update_streak(self, name):
        """Обновление текущей серии выполнений"""
        habit = self.habits[name]
        completions = sorted(habit['completions'])

        if len(completions) == 0:
            habit['streak'] = 0
        else:
            current_streak = 1
            current_date = datetime.strptime(completions[-1], "%Y-%m-%d")

            for i in range(len(completions) - 2, -1, -1):
                prev_date = datetime.strptime(completions[i], "%Y-%m-%d")
                if (current_date - prev_date).days == 1:
                    current_streak += 1
                    current_date = prev_date
                else:
                    break

                habit['streak'] = current_streak

    def show_statistics(self):
        """Просмотр статистики по всем привычкам"""
        if not self.habits:
            print("У вас пока нет привычек!")
        else:
            print("\n" + "=" * 50)
            print("СТАТИСТИКА ПРИВЫЧЕК")
            print("=" * 50)

            total_habits = len(self.habits)

            print(f"Всего привычек: {total_habits}")
            print("\nCтатистика по каждой привычке:")
            print("-" * 30)

            for name, habit in self.habits.items():
                print(f"\nПривычка: {name}")
                if habit['description']:
                    print(f"Описание: {habit['description']}")
                print(f"Создана: {habit['created_date']}")
                print(f"Текущая серия: {habit['streak']} дней")
                print(f"Всего выполнено: {habit['total_completed']} раз")

    def show_habits(self):
        """Показать список всех привычек"""
        if not self.habits:
            print("У вас пока нет привычек!")
        else:
            print("\n" + "=" * 30)
            print("ВАШИ ПРИВЫЧКИ")
            print("=" * 30)

            for i, name in enumerate(self.habits.keys(), 1):
                habit = self.habits[name]
                if datetime.now().strftime("%Y-%m-%d") in habit['completions']:
                    status = "✅"
                else:
                    status = "❌"
                print(f"{i}. {name} {status} (серия: {habit['streak']} дней)")

    def delete_habit(self, name):
        """Удаление привычки"""
        if name not in self.habits:
            print(f"Привычка '{name}' не найдена!")
        else:
            del self.habits[name]
            self.save_habits()
            print(f"Привычка '{name}' удалена!")


def main():
    tracker = HabitTracker()
    while True:
        print("\n" + "=" * 40)
        print("ТРЕКЕР ПРИВЫЧЕК")
        print("=" * 40)
        print("1. Добавить привычку")
        print("2. Отметить выполнение")
        print("3. Показать все привычки")
        print("4. Показать статистику")
        print("5. Удалить привычку")
        print("0. Выйти")

        choice = input("\nВыберите действие (1-6): ").strip()

        if choice == '1':
            name = input("Введите название привычки: ").strip()
            description = input("Введите описание (необязательно): ").strip()
            tracker.add_habit(name, description)
        elif choice == '2':
            tracker.show_habits()
            if tracker.habits:
                name = input("\nВведите название привычки для отметки: ").strip()
                tracker.mark_completed(name)
        elif choice == '3':
            tracker.show_habits()
        elif choice == '4':
            tracker.show_statistics()
        elif choice == '5':
            tracker.show_habits()
            if tracker.habits:
                name = input("\nВведите название привычки для удаления: ").strip()
                tracker.delete_habit(name)
        elif choice == '0':
            print("До свидания!")
            break
        else:
            print("Неверный выбор! Попробуйте снова.")

if __name__ == '__main__':
    main()