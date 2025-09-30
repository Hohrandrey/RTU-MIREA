import kotlin.random.Random


class Cat{
    private fun rest(){
        println("Sleep")
    }

    private fun voice(){
        println("Meow")
    }

    private fun feed(){
        println("Eat")
    }

    fun randomAction(){
        when (Random.nextInt(0, 3)) {
            0 -> rest()
            1 -> voice()
            2 -> feed()
        }
    }
}


class Student {
    var firstName: String = ""
        set(value) {
            field = value.trim()
        }
        get() = field.replaceFirstChar { it.uppercase() }

    var lastName: String = ""
        set(value) {
            field = value.trim()
        }
        get() = field.replaceFirstChar { it.uppercase() }

    private var scores: IntArray = IntArray(10) { 0 }

    fun getScores(): IntArray = scores.copyOf()

    fun setScores(newScores: IntArray) {
        scores = newScores.copyOf()
    }

    fun addScore(newScore: Int) {
        scores = scores.copyOfRange(1, scores.size) + newScore
    }

    fun getAverageScore(): Double {
        return if (scores.isEmpty()) 0.0
        else scores.average()
    }
}


class StudentService(){
    fun findBestStudent(students: Array<Student>): Student {

        var bestStudent = students[0]
        var bestAverage = bestStudent.getAverageScore()

        for (i in 1 until students.size) {
            val currentAverage = students[i].getAverageScore()
            if (currentAverage > bestAverage) {
                bestStudent = students[i]
                bestAverage = currentAverage
            }
        }

        return bestStudent
    }

    fun sortStudentsByLastName(students: Array<Student>): Array<Student> {
        return students.sortedBy { it.lastName }.toTypedArray()
    }
}

fun t1(){
    val t1 = Cat()
    repeat(5) {
        t1.randomAction()
    }
}

fun t2() {
    val student = Student()
    val student1 = Student()

    student.firstName = "  Варя  "
    student.lastName = "  Перкова  "
    student1.firstName = "  Кирилл  "
    student1.lastName = "  Павлов  "

    println("\n\nСтудент: ${student.firstName} ${student.lastName}")
    println("Студент: ${student1.firstName} ${student1.lastName}")

    student.setScores(intArrayOf(5, 4, 3, 5, 4, 3, 5, 4, 3, 5)) // 4.1
    println("Изначальные оценки: ${student.getScores().joinToString()}")

    student.addScore(4)
    println("После добавления 4: ${student.getScores().joinToString()}")

    println("Среднее значение: ${student.getAverageScore()}")
}

fun t3(){
    val studentService = StudentService()

    val student1 = Student().apply {
        firstName = "Кирилл"
        lastName = "Апрокин"
        setScores(intArrayOf(5, 5, 5, 5, 5, 5, 5, 5, 5, 5)) // 5
    }

    val student2 = Student().apply {
        firstName = "Настя"
        lastName = "Удодская"
        setScores(intArrayOf(4, 4, 4, 4, 4, 4, 4, 4, 4, 4)) // 4
    }

    val student3 = Student().apply {
        firstName = "Лёха"
        lastName = "Эчпочмаков"
        setScores(intArrayOf(3, 5, 4, 5, 3, 5, 4, 5, 3, 5)) // 4.2
    }

    val students = arrayOf(student1, student2, student3)

    // Поиск лучшего студента
    val bestStudent = studentService.findBestStudent(students)
    println("\n\nЛучший студент: ${bestStudent.firstName} ${bestStudent.lastName}")
    println("Его средний балл: ${bestStudent.getAverageScore()}")

    println("\nДо сортировки:")
    students.forEach {
        println("${it.lastName} ${it.firstName} - средний балл: ${it.getAverageScore()}")
    }

    // Тест сортировки по фамилиям
    val sortedStudents = studentService.sortStudentsByLastName(students)

    println("\nПосле сортировки по фамилиям:")
    sortedStudents.forEach {
        println("${it.lastName} ${it.firstName} - средний балл: ${it.getAverageScore()}")
    }
}

fun main() {
    t1()
    t2()
    t3()
}