import java.time.LocalDate
import java.time.format.DateTimeFormatter
import java.time.format.DateTimeParseException

enum class Gender {
    Male, Female
}

class NameValidationException(message: String) : Exception(message)
class BirthDateValidationException(message: String) : Exception(message)
class GenderValidationException(message: String) : Exception(message)
class WeightValidationException(message: String) : Exception(message)

class FormValidator {
    fun validateName(name: String) {
        if (name.length < 2 || name.length > 20) {
            throw NameValidationException("Имя должно содержать от 2 до 20 символов. Получено: ${name.length}")
        }
        if (!name[0].isUpperCase()) {
            throw NameValidationException("Первая буква имени должна быть заглавной")
        }
    }

    fun validateBirthDate(birthDate: String) {
        try {
            val formatter = DateTimeFormatter.ofPattern("dd.MM.yyyy")
            val date = LocalDate.parse(birthDate, formatter)
            val minDate = LocalDate.of(1900, 1, 1)
            val currentDate = LocalDate.now()

            if (date.isBefore(minDate)) {
                throw BirthDateValidationException("Дата рождения не может быть раньше 01.01.1900")
            }

            if (date.isAfter(currentDate)) {
                throw BirthDateValidationException("Дата рождения не может быть в будущем")
            }

        } catch (e: DateTimeParseException) {
            throw BirthDateValidationException("Неверный формат даты. Используйте формат: дд.мм.гггг")
        }
    }

    fun validateGender(gender: String) {
        try {
            Gender.valueOf(gender)
        } catch (e: IllegalArgumentException) {
            throw GenderValidationException("Пол должен быть 'Male' или 'Female'. Получено: $gender")
        }
    }

    fun validateWeight(weight: String) {
        try {
            val weightValue = weight.toDouble()

            if (weightValue <= 0) {
                throw WeightValidationException("Вес должен быть положительным числом. Получено: $weightValue")
            }
        } catch (e: NumberFormatException) {
            throw WeightValidationException("Вес должен быть числом. Получено: $weight")
        }
    }

    fun validateForm(name: String, birthDate: String, gender: String, weight: String): Boolean {
        val errors = mutableListOf<String>()

        try {
            validateName(name)
        } catch (e: NameValidationException) {
            errors.add("Ошибка имени: ${e.message}")
        }

        try {
            validateBirthDate(birthDate)
        } catch (e: BirthDateValidationException) {
            errors.add("Ошибка даты рождения: ${e.message}")
        }

        try {
            validateGender(gender)
        } catch (e: GenderValidationException) {
            errors.add("Ошибка пола: ${e.message}")
        }

        try {
            validateWeight(weight)
        } catch (e: WeightValidationException) {
            errors.add("Ошибка веса: ${e.message}")
        }

        if (errors.isNotEmpty()) {
            println("Обнаружены ошибки валидации:")
            errors.forEach { println("- $it") }
            return false
        }

        println("Анкета прошла валидацию успешно!")
        return true
    }
}

fun t1() {
    val validator = FormValidator()

    // Корректные данные
    println("=== Тест 1: Корректные данные ===")
    val success = validator.validateForm(
        name = "Иван",
        birthDate = "15.05.1990",
        gender = "Male",
        weight = "75.5"
    )
    println("Результат: ${if (success) "УСПЕХ" else "ОШИБКА"}\n")

    // с ошибками
    println("=== Тест 2: Данные с ошибками ===")
    val failure = validator.validateForm(
        name = "иван", // маленькая первая буква
        birthDate = "01.01.1800", // слишком ранняя дата
        gender = "Unknown", // неверный пол
        weight = "-5" // отрицательный вес
    )
    println("Результат: ${if (failure) "УСПЕХ" else "ОШИБКА"}\n")
}

class User(val name: String, val age: Int, val friends: List<User>)

fun t2(){
    val users = object {
        val list = listOf(
            User("Алексей", 25, emptyList()),
            User("Мария", 32, emptyList()),
            User("Иван", 28, emptyList()),
            User("Ольга", 45, emptyList()),
            User("Дмитрий", 19, emptyList())
        )
    }

    val oldestUser = users.list.maxByOrNull { it.age }

    if (oldestUser != null) {
        println("Самый старший пользователь: ${oldestUser.name}, возраст: ${oldestUser.age}")
    } else {
        println("Список пользователей пуст")
    }
}

fun main() {
    t1()
    t2()
}