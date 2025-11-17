class UserProfile(
    val name: String? = null,
    val age: Int? = null,
    val hobby: String? = null,
    val favoriteColor: String? = null,
    val favoriteMovie: String? = null,
    val favoriteBook: String? = null
) {

    fun printProfileInfo() {

        println("Имя: ${name ?: "Не указано"}")
        println("Возраст: ${age ?: "Не указан"}")
        println("Хобби: ${hobby ?: "Не указано"}")
        println("Любимый цвет: ${favoriteColor ?: "Не указан"}")
        println("Любимый фильм: ${favoriteMovie ?: "Не указан"}")
        println("Любимая книга: ${favoriteBook ?: "Не указана"}")

    }
}


fun t1() {
    val user1 = UserProfile(
        name = "Анна",
        age = 17,
        hobby = "Чтение, путешествия",
        favoriteColor = "Розовый",
        favoriteMovie = "Начало",
        favoriteBook = "Фанфик по Ване Дмитриенко"
    )

    val user2 = UserProfile(
        name = "Андрей",
        age = 45,
        favoriteColor = "Чёрный"
    )

    val user3 = UserProfile(
        name = "Кирилл"
    )

    println("Полный профиль:")
    user1.printProfileInfo()

    println("\nЧастично заполненный профиль:")
    user2.printProfileInfo()

    println("\nМинимальный профиль:")
    user3.printProfileInfo()
}


fun Double.celsiusToFahrenheit(): Double {
    return this * 9.0 / 5.0 + 32.0
}

fun Double.fahrenheitToCelsius(): Double {
    return (this - 32.0) * 5.0 / 9.0
}

fun Double.kilometersToMiles(): Double {
    return this * 0.621371
}

fun Double.milesToKilometers(): Double {
    return this * 1.60934
}

fun Double.kilogramsToPounds(): Double {
    return this * 2.20462
}

fun Double.poundsToKilograms(): Double {
    return this * 0.453592
}

fun readDouble(prompt: String): Double {
    while (true) {
        try {
            print(prompt)
            return readln().replace(',', '.').toDouble()
        } catch (e: NumberFormatException) {
            println("Ошибка: Введите корректное число!")
        }
    }
}


fun temperatureMenu() {
    println("\nКонвертация температуры")
    println("1. Цельсий → Фаренгейт")
    println("2. Фаренгейт → Цельсий")
    print("Выберите тип конвертации (1-2): ")

    when (readln()) {
        "1" -> {
            val celsius = readDouble("Введите температуру в градусах Цельсия: ")
            val fahrenheit = celsius.celsiusToFahrenheit()
            println("$celsius °C = ${"%.2f".format(fahrenheit)} °F")
        }
        "2" -> {
            val fahrenheit = readDouble("Введите температуру в градусах Фаренгейта: ")
            val celsius = fahrenheit.fahrenheitToCelsius()
            println("$fahrenheit °F = ${"%.2f".format(celsius)} °C")
        }
        else -> println("Неверный выбор!")
    }
}

fun distanceMenu() {
    println("\nКонвертация расстояния")
    println("1. Километры → Мили")
    println("2. Мили → Километры")
    print("Выберите тип конвертации (1-2): ")

    when (readln()) {
        "1" -> {
            val kilometers = readDouble("Введите расстояние в километрах: ")
            val miles = kilometers.kilometersToMiles()
            println("$kilometers км = ${"%.2f".format(miles)} миль")
        }
        "2" -> {
            val miles = readDouble("Введите расстояние в милях: ")
            val kilometers = miles.milesToKilometers()
            println("$miles миль = ${"%.2f".format(kilometers)} км")
        }
        else -> println("Неверный выбор!")
    }
}

fun weightMenu() {
    println("\nКонвертация веса")
    println("1. Килограммы → Фунты")
    println("2. Фунты → Килограммы")
    print("Выберите тип конвертации (1-2): ")

    when (readln()) {
        "1" -> {
            val kilograms = readDouble("Введите вес в килограммах: ")
            val pounds = kilograms.kilogramsToPounds()
            println("$kilograms кг = ${"%.2f".format(pounds)} фунтов")
        }
        "2" -> {
            val pounds = readDouble("Введите вес в фунтах: ")
            val kilograms = pounds.poundsToKilograms()
            println("$pounds фунтов = ${"%.2f".format(kilograms)} кг")
        }
        else -> println("Неверный выбор!")
    }
}

fun t2() {
    println("\n\nДобро пожаловать в конвертер единиц измерения!")

    while (true) {
        println("\nКонвертация единиц измерения")
        println("1. Конвертация температуры")
        println("2. Конвертация расстояния")
        println("3. Конвертация веса")
        println("4. Выход")
        print("Выберите опцию (1-4): ")

        when (readln()) {
            "1" -> temperatureMenu()
            "2" -> distanceMenu()
            "3" -> weightMenu()
            "4" -> {
                return
            }
            else -> println("Неверный выбор! Пожалуйста, выберите опцию от 1 до 4.")
        }
    }
}

fun main(){
    t1()
    t2()
}