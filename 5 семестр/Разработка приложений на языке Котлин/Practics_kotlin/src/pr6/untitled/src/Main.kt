import banking.BankAccount


class TimeMeasure {
    private var hours: Int = 0
    private var minutes: Int = 0
    private var seconds: Int = 0

    // часы минуты секунды
    constructor(hours: Int, minutes: Int, seconds: Int) {
        validateTime(hours, minutes, seconds)
        this.hours = hours
        this.minutes = minutes
        this.seconds = seconds
    }

    // часы минуты
    constructor(hours: Int, minutes: Int) : this(hours, minutes, 0)

    // часы
    constructor(hours: Int) : this(hours, 0, 0)


    private fun validateTime(hours: Int, minutes: Int, seconds: Int) {
        if (hours < 0 || hours > 23) {
            throw IllegalArgumentException("Часы должны быть в диапазоне от 0 до 23")
        }
        if (minutes < 0 || minutes > 59) {
            throw IllegalArgumentException("Минуты должны быть в диапазоне от 0 до 59")
        }
        if (seconds < 0 || seconds > 59) {
            throw IllegalArgumentException("Секунды должны быть в диапазоне от 0 до 59")
        }
    }


    fun display24HourFormat() {
        println(String.format("%02d:%02d:%02d", hours, minutes, seconds))
    }


    fun display12HourFormat() {
        val period = if (hours < 12) "AM" else "PM"
        val displayHours = if (hours % 12 == 0) 12 else hours % 12
        println(String.format("%02d:%02d:%02d %s", displayHours, minutes, seconds, period))
    }

    fun addTime(addHours: Int = 0, addMinutes: Int = 0, addSeconds: Int = 0) {
        if (addHours < 0 || addMinutes < 0 || addSeconds < 0) {
            throw IllegalArgumentException("Добавляемое время не может быть отрицательным")
        }

        val totalSeconds = this.seconds + addSeconds
        this.seconds = totalSeconds % 60
        val dopMinutes = totalSeconds / 60

        val totalMinutes = this.minutes + addMinutes + dopMinutes
        this.minutes = totalMinutes % 60
        val dopHours = totalMinutes / 60

        val totalHours = this.hours + addHours + dopHours
        this.hours = totalHours % 24
    }
}

fun t1(){
    val time1 = TimeMeasure(14, 30, 45)
    time1.display24HourFormat()
    time1.display12HourFormat()

    val time2 = TimeMeasure(8, 15)
    time2.display24HourFormat()

    val time3 = TimeMeasure(23)
    time3.display24HourFormat()

    val testTime = TimeMeasure(10, 45, 30)
    print("Начальное время: ")
    testTime.display24HourFormat()

    testTime.addTime(2, 30, 45)
    print("После добавления 2ч 30м 45с: ")
    testTime.display24HourFormat()

    val midnightTest = TimeMeasure(23, 59, 30)
    print("\nПеред полночью: ")
    midnightTest.display24HourFormat()
    midnightTest.addTime(0, 0, 30)
    print("После добавления 30 секунд: ")
    midnightTest.display24HourFormat()
}

class UniqueString {
    private var chars: CharArray

    constructor(charArray: CharArray) {
        this.chars = charArray.copyOf()
    }

    constructor(str: String) {
        this.chars = str.toCharArray()
    }


    fun getCharAt(index: Int): Char {
        if (index < 0 || index >= chars.size) {
            throw IndexOutOfBoundsException("Индекс $index выходит за границы")
        }
        return chars[index]
    }


    fun length(): Int = chars.size


    fun print() {
        println(String(chars))
    }

    // Подстрока для чара
    fun contains(substring: CharArray): Boolean {
        if (substring.isEmpty()) return true
        if (substring.size > chars.size) return false

        for (i in 0..chars.size - substring.size) {
            var found = true
            for (j in substring.indices) {
                if (chars[i + j] != substring[j]) {
                    found = false
                    break
                }
            }
            if (found) return true
        }
        return false
    }

    // Подстрока для стринга
    fun contains(substring: String): Boolean {
        return contains(substring.toCharArray())
    }


    fun trimStart(): UniqueString {
        var startIndex = 0
        while (startIndex < chars.size && chars[startIndex].isWhitespace()) {
            startIndex++
        }

        if (startIndex == 0) return this

        val result = CharArray(chars.size - startIndex)
        chars.copyInto(result, 0, startIndex)
        return UniqueString(result)
    }


    fun reverse(): UniqueString {
        val reversed = CharArray(chars.size)
        for (i in chars.indices) {
            reversed[i] = chars[chars.size - 1 - i]
        }
        return UniqueString(reversed)
    }
}

fun t2(){
    val str1 = UniqueString(charArrayOf('H', 'e', 'l', 'l', 'o'))
    val str2 = UniqueString("Hello World")

    print("\n\n\n\nstr1: ")
    str1.print()
    print("str2: ")
    str2.print()

    println("\nДлина str1: ${str1.length()}")
    println("Длина str2: ${str2.length()}")
    println("3-й символ str2: '${str2.getCharAt(3)}'")

    println("\nstr2 содержит 'World' (String): ${str2.contains("World")}")
    println("str2 содержит 'Java' (String): ${str2.contains("Java")}")
    println("str2 содержит charArrayOf('W','o','r'): ${str2.contains(charArrayOf('W', 'o', 'r'))}")

    val str3 = UniqueString("   Hello")
    print("\nС пробелами спереди: ")
    str3.print()
    print("Без пробелов спереди: ")
    str3.trimStart().print()

    print("\nstr1 до разворота: ")
    str1.print()
    print("str1 после разворота: ")
    str1.reverse().print()
}

class Atm {
    private val accounts = mutableListOf<BankAccount>()


    fun createAccount(accountNumber: String, ownerName: String, initialBalance: Double = 0.0): BankAccount {
        val account = BankAccount(accountNumber, initialBalance, ownerName)
        accounts.add(account)
        return account
    }


    fun findAccount(accountNumber: String): BankAccount? {
        return accounts.find { it.accountNumber == accountNumber }
    }


    fun depositToAccount(accountNumber: String, amount: Double): Boolean {
        val account = findAccount(accountNumber)
        return if (account != null) {
            try {
                account.deposit(amount)
                println("Успешно пополнено: ${"%.2f".format(amount)} руб.")
                true
            } catch (e: IllegalArgumentException) {
                println("Ошибка: ${e.message}")
                false
            }
        } else {
            println("Счет не найден")
            false
        }
    }


    fun withdrawFromAccount(accountNumber: String, amount: Double): Boolean {
        val account = findAccount(accountNumber)
        return if (account != null) {
            if (account.withdraw(amount)) {
                println("Успешно снято: ${"%.2f".format(amount)} руб.")
                true
            } else {
                println("Недостаточно средств на счету")
                false
            }
        } else {
            println("Счет не найден")
            false
        }
    }


    fun getAccountInfo(accountNumber: String) {
        val account = findAccount(accountNumber)
        if (account != null) {
            println(account.getAccountInfo())
        } else {
            println("Счет не найден")
        }
    }
}

fun dop(){
    val atm = Atm()

    atm.createAccount("1234567890", "Иван Иванов", 1000.0)
    atm.createAccount("0987654321", "Петр Петров")

    println("\n\n\n\n")

    atm.depositToAccount("1234567890", 500.0)
    atm.withdrawFromAccount("1234567890", 200.0)
    atm.withdrawFromAccount("1234567890", 2000.0)

    atm.depositToAccount("0987654321", 1000.0)
    atm.withdrawFromAccount("0987654321", 300.0)

    println("\n")
    atm.getAccountInfo("1234567890")
    println()
    atm.getAccountInfo("0987654321")
}

fun main() {
    t1()
    t2()
    dop()
}