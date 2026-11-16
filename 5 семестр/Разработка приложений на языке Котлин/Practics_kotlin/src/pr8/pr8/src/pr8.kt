import java.util.UUID


enum class DrinkType(val volume: Int, val temperature: Int) {
    COFFEE(200, 85) {
        override fun getDisplayName() = "Кофе"
    },
    TEA(250, 80) {
        override fun getDisplayName() = "Чай"
    },
    JUICE(300, 5) {
        override fun getDisplayName() = "Сок"
    },
    WATER(500, 10) {
        override fun getDisplayName() = "Вода"
    },
    MILK(200, 65) {
        override fun getDisplayName() = "Молоко"
    };

    abstract fun getDisplayName(): String

    fun getVolumeML() = volume
    fun isHot() = temperature > 60
}

fun t1(){
    DrinkType.entries.forEach { drink ->
        println("Напиток: ${drink.getDisplayName()}")
        println("Объём: ${drink.getVolumeML()}мл")
        println("Горячий: ${if (drink.isHot()) "Да" else "Нет"}\n")
    }
}

abstract class BankCard(val cardNumber: String, var pinCode: Int) { //pinCode не используется
    abstract fun getBalance(): Double
    abstract fun updateBalance(amount: Double)
}


class CreditCard(cardNumber: String, pinCode: Int, val creditLimit: Double) : BankCard(cardNumber, pinCode) {
    private var debt: Double = 0.0

    override fun getBalance(): Double {
        return creditLimit - debt // Баланс = кредитный лимит - долг
    }

    override fun updateBalance(amount: Double) {
        debt -= amount // При пополнении карты долг уменьшается
    }

    // Функционал метода такой же, как и у получения баланса
    /*fun getAvailableCredit(): Double { // Удален open, так как класс никем не наследуется и метод не переопределяется
        return creditLimit - debt
    }*/
}


class DebitCard(cardNumber: String, pinCode: Int) : BankCard(cardNumber, pinCode) {
    private var balance: Double = 0.0

    override fun getBalance(): Double {
        return balance
    }

    override fun updateBalance(amount: Double) {
        balance += amount // Увеличиваем или уменьшаем баланс, а не заменяем его
    }


    data class AdditionalInfo(val ownerName: String)
    // лучше просто добавить свойство ownerName в класс BankCard вместо создания класса
}


enum class TransactionType {
    WITHDRAWAL,
    DEPOSIT // лишняя ;

    // Функция не имеет смысла тк есть встроенный метод
    /*fun fromString(type: String): TransactionType {
        return valueOf(type.uppercase())
    }*/
}


data class Transaction(
    val cardNumber: String,
    val amount: Double,
    val date: String,
    val type: TransactionType
) {
    val transactionId: String = UUID.randomUUID().toString() // Генерация уникальных id
}


class ATM {

    private val transactions: MutableList<Transaction> = mutableListOf() // Удален метод и добавлена инициализация

    fun makeTransaction(card: BankCard, amount: Double, date: String, type: TransactionType): Boolean {
        when (type) {
            TransactionType.WITHDRAWAL -> {
                if (card.getBalance() >= amount) {
                    card.updateBalance(-amount)
                    transactions.add(Transaction(card.cardNumber, amount, date, type))
                    return true
                }
            }
            TransactionType.DEPOSIT -> {
                card.updateBalance(amount)
                transactions.add(Transaction(card.cardNumber, amount, date, type))
                return true
            }

        }
        return false
    }

    fun printTransactions(cardNumber: String) {

        val cardTransactions = transactions.filter { it.cardNumber == cardNumber }
        println("Транзакции по карте $cardNumber:")
        for (transaction in cardTransactions) {

            println("${transaction.date}: ${transaction.type} ${transaction.amount}")
        }
    }


    fun getAllTransactions(): List<Transaction> { // Метод возвращает неизменяемый список
        return transactions.toList()
    }
}

fun t2_1(){
    val atm = ATM()

    val creditCard = CreditCard("1234-5678-9012-3456", 1234, 10000.0)
    val debitCard = DebitCard("9876-5432-1098-7654", 5678)

    debitCard.updateBalance(5000.0)

    atm.makeTransaction(creditCard, 2000.0, "2025-01-15", TransactionType.WITHDRAWAL)
    atm.makeTransaction(debitCard, 1000.0, "2025-01-15", TransactionType.DEPOSIT) // Передаем тип транзакции, а не строку с названием

    println("Баланс кредитной карты: ${creditCard.getBalance()}")
    println("Баланс дебетовой карты: ${debitCard.getBalance()}")

    atm.printTransactions("1234-5678-9012-3456")
}

open class Animal {
    open fun speak() = "Some sound" // Добавление open
}
class Cat : Animal() {
    override fun speak() = "Meow!"
}

fun t2_2(){
    val cat = Cat()
    println(cat.speak())
}

data class User(val name: String, val age: Int) // Добавлены val

fun t2_3(){
    val user = User("Лёша", 23)
    println(user)
}


fun main() {
    t1()
    t2_1()
    t2_2()
    t2_3()
}