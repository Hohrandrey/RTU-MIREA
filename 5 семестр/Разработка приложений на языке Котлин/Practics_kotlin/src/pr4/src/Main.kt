fun t1_var2() {
    println("🎯 Добро пожаловать в викторину! 🎯")
    println("Ответьте на вопросы, выбрав номер правильного варианта\n")

    val questions = listOf(
        Triple("Столица Франции?", listOf("1. Лондон", "2. Париж", "3. Берлин", "4. Мадрид"), 2),
        Triple("Самая большая планета?", listOf("1. Земля", "2. Марс", "3. Юпитер", "4. Сатурн"), 3),
        Triple("Автор 'Война и мир'?", listOf("1. Достоевский", "2. Пушкин", "3. Толстой", "4. Чехов"), 3)
    )

    var correctAnswers = 0

    //логальн функ
    fun check_correct(userAnswer: Int, correctAnswer: Int) {
        if (userAnswer == correctAnswer) {
            println("✅ Правильно!\n")
            correctAnswers++
        } else {
            println("❌ Неправильно. Правильный ответ: $correctAnswer\n")
        }
    }

    for ((index, questionData) in questions.withIndex()) {
        val (question, options, correctAnswer) = questionData
        println("Вопрос ${index + 1}: $question")
        options.forEach { println(it) }
        print("\nВаш ответ (введите номер): ")
        val userAnswer = readln().toInt()
        check_correct(userAnswer, correctAnswer)
    }

    println("Итоговый результат:")
    println("Правильных ответов: $correctAnswers из ${questions.size}")
}


fun t2(){
    val words = arrayOf("the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is", "day")
    println("Введите число k: ")
    var k = readln().toInt()


    while (k <= 0) {
        println("Число должно быть положительным!")
        k = readln().toInt()
    }

    //однострочн функ
    fun check_count() = words.groupingBy { it }.eachCount()


    val wordCounts = check_count()
    println("Количество слов: $wordCounts")


    fun printReversed() {
        wordCounts.entries
            .sortedByDescending { it.value }
            .take(k)
            .forEach {println("${it.key}: ${it.value}")
            }
    }

    println("\n$k наиболее часто встречающихся слов:")
    printReversed()
}


fun main() {
    t1_var2()
    t2()
}