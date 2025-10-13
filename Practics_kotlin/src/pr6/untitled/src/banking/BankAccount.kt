package banking

class BankAccount(val accountNumber: String, balance: Double, ownerName: String) {
    private var _balance: Double = if (balance >= 0) balance else throw IllegalArgumentException("Начальный баланс не может быть отрицательным")
    private var _ownerName: String = if (ownerName.length >= 2) ownerName else throw IllegalArgumentException("Имя владельца должно содержать не менее 2 символов")
    private var transactionCount: Int = 0

    val balance: Double
        get() = Math.round(_balance * 100.0) / 100.0

    var ownerName: String
        get() = _ownerName
        set(value) {
            if (value.length >= 1) {
                _ownerName = value
            } else {
                throw IllegalArgumentException("Имя владельца не должно быть пустым")
            }
        }

    // конструктор c нулевым балансом
    constructor(accountNumber: String, ownerName: String) :
            this(accountNumber, 0.0, ownerName)


    fun deposit(amount: Double) {
        if (amount <= 0) {
            throw IllegalArgumentException("Сумма пополнения должна быть положительной")
        }
        _balance += amount
        logTransaction()
    }


    fun withdraw(amount: Double): Boolean {
        if (amount <= 0) {
            throw IllegalArgumentException("Сумма снятия должна быть положительной")
        }
        if (_balance >= amount) {
            _balance -= amount
            logTransaction()
            return true
        }
        return false
    }


    private fun logTransaction() {
        transactionCount++
    }

    fun getAccountInfo(): String {
        return """
            |Номер счета: $accountNumber
            |Владелец: $ownerName
            |Баланс: ${"%.2f".format(balance)} руб.
            |Операций: $transactionCount
        """.trimMargin()
    }
}