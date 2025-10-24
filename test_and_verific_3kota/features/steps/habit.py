from behave import given, when, then
import os
from datetime import datetime
from pr3.var33 import HabitTracker


@given('привычка "{habit_name}" добавлена в трекер')
def step_impl(context, habit_name):
    if os.path.exists("test_habits.json"):
        os.remove("test_habits.json")

    context.tracker = HabitTracker("test_habits.json")
    context.tracker.add_habit(habit_name, "Ежедневное плавание")

    context.initial_total_completed = context.tracker.habits[habit_name]['total_completed']
    context.habit_name = habit_name


@when('я отмечаю выполнение привычки "{habit_name}"')
def step_impl(context, habit_name):
    context.tracker.mark_completed(habit_name)


@then('привычка "{habit_name}" должна быть отмечена как выполненная на сегодня')
def step_impl(context, habit_name):
    today = datetime.now().strftime("%Y-%m-%d")
    habit = context.tracker.habits[habit_name]
    assert today in habit['completions']


@then('статистика выполнения должна увеличиться на 1')
def step_impl(context):
    current_total_completed = context.tracker.habits[context.habit_name]['total_completed']
    expected = context.initial_total_completed + 1
    assert current_total_completed == expected


@then('текущая дата должна быть добавлена в список выполненных дней')
def step_impl(context):
    today = datetime.now().strftime("%Y-%m-%d")
    completions = context.tracker.habits[context.habit_name]['completions']
    assert today in completions


@then('стрик привычки должен быть обновлен')
def step_impl(context):
    streak = context.tracker.habits[context.habit_name]['streak']
    assert streak == 0


def after_scenario():
    if os.path.exists("test_habits.json"):
        os.remove("test_habits.json")