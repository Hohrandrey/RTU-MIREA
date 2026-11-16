data class Product(
    val id: Int,
    val name: String,
    val price: Double,
    val category: String,
    val inStock: Boolean = true
)

data class Order(
    val id: Int,
    val products: MutableList<Product> = mutableListOf(),
    var totalPrice: Double = 0.0,
    var status: String = "Создан",
    var discount: Double = 0.0
) {
    val finalPrice: Double
        get() = totalPrice * (1 - discount)
}

class OrderManager {
    fun createOrder(orderId: Int): Order {
        return Order(orderId).apply {
            status = "Создан"
            totalPrice = 0.0
            discount = 0.0
            println("Заказ #$id со статусом: $status")
        }
    }

    fun addProductsToOrder(order: Order, vararg products: Product): Order {
        return order.apply {
            products.forEach { product ->
                product.let {
                    if (it.inStock) {
                        this.products.add(it)
                        this.totalPrice += it.price
                        println("Добавлен товар: ${it.name} - ${it.price} руб.")
                    } else {
                        println("Товар ${it.name} отсутствует на складе")
                    }
                }
            }
        }
    }

    fun calculateDiscount(order: Order): Double {
        return order.run {
            val calculatedDiscount = when {
                totalPrice > 10000 -> 0.15
                totalPrice > 5000 -> 0.10
                totalPrice > 2000 -> 0.05
                else -> 0.0
            }
            calculatedDiscount
        }
    }

    fun applyDiscount(order: Order, discount: Double): Order {
        return order.also {
            it.discount = discount
            println("Применена скидка: ${discount * 100}%")
            println("Итоговая стоимость: ${it.finalPrice} руб. (было: ${it.totalPrice} руб.)")
        }
    }

    fun processOrder(order: Order): Order {
        return order.let { currentOrder ->
            if (currentOrder.products.isEmpty()) {
                println("Ошибка: заказ пуст")
                return currentOrder
            }
            currentOrder.apply {
                status = "Обработка"
                println("Заказ #$id переведен в статусу: $status")

                val unavailableProducts = products.filter { !it.inStock }
                if (unavailableProducts.isNotEmpty()) {
                    println("Некоторые товары отсутствуют: ${unavailableProducts.joinToString { it.name }}")
                } else {
                    status = "Готов к отправке"
                    println("Заказ #$id готов к отправке")
                }
            }
        }
    }

    fun printOrderInfo(order: Order) {
        with(order) {
            println("\nИнформация о заказе #$id")
            println("Статус: $status")
            println("Товары (${products.size} шт.):")
            products.forEachIndexed { index, product ->
                println("   ${index + 1}. ${product.name} - ${product.price} руб.")
            }
            println("Общая стоимость: $totalPrice руб.")
            println("Скидка: ${discount * 100}%")
            println("Итоговая стоимость: $finalPrice руб.")
        }
    }

    fun findProductsByCategory(order: Order, category: String): List<Product> {
        return order.let {
            it.products.filter { product ->
                product.category.equals(category, ignoreCase = true)
            }
        }
    }

    fun updateOrderStatus(order: Order, newStatus: String): Order {
        return order.also {
            val oldStatus = it.status
            it.status = newStatus
            println("Статус заказа #${it.id} изменен с '$oldStatus' на '$newStatus'")
        }
    }

    fun removeProductFromOrder(order: Order, productId: Int): Order {
        return order.apply {
            val productToRemove = products.find { it.id == productId }
            productToRemove?.let { product ->
                products.remove(product)
                totalPrice -= product.price
                println("Товар удален: ${product.name} из заказа #$id")
                println("Обновленная сумма: $totalPrice руб.")
            } ?: println("Товар с ID $productId не найден в заказе")
        }
    }
}

fun t1(){
    val orderManager = OrderManager()

    val products = listOf(
        Product(1, "Samsung Smartphone", 25000.0, "Electronics"),
        Product(2, "Lenovo Laptop", 45000.0, "Electronics"),
        Product(3, "T-Shirt", 1500.0, "Clothing"),
        Product(4, "Sony Headphones", 8000.0, "Electronics", false) // Нет в наличии
    )

    val order = orderManager.createOrder(12345)

    orderManager.addProductsToOrder(order, *products.toTypedArray())

    val discount = orderManager.calculateDiscount(order)
    orderManager.applyDiscount(order, discount)

    orderManager.processOrder(order)

    orderManager.printOrderInfo(order)

    val category = "Electronics"
    val electronics = orderManager.findProductsByCategory(order, category)
    println("\nТовары в категории '$category':")
    electronics.forEach {
        println("   - ${it.name} (${if (it.inStock) "в наличии" else "нет в наличии"})")
    }

    orderManager.updateOrderStatus(order, "Выполнен")

    orderManager.removeProductFromOrder(order, 3)
    println("\n")
}

class ErrorLogger<T> {
    fun logError(error: T) {
        when (error) {
            is String -> println("String error: $error")
            is Number -> println("Numeric error: $error")
            else -> println("Unknown error type")
        }
    }
}

// функ расширения
fun <T> ErrorLogger<T>.logSend(error: T) {
    logError(error)
    println("Attempting to send error to server: $error")
}


fun t2(){
    // для строк
    val stringLogger = ErrorLogger<String>()
    stringLogger.logError("Ошибка соединения")

    // для чисел
    val numberLogger = ErrorLogger<Number>()
    numberLogger.logError(404)
    numberLogger.logError(3.14)

    // для любых типов
    val anyLogger = ErrorLogger<Any>()
    anyLogger.logError("Тест")
    anyLogger.logError(500)
    anyLogger.logError(listOf(1, 2, 3))

    println("\nИспользование функции расширения")
    stringLogger.logSend("Ошибка таймаута")
    numberLogger.logSend(503)
}

class ValueValidator<T : Any> {
    fun validate(value: T): Boolean {
        return when (value) {
            is Number -> validateNumber(value)
            is String -> validateString(value)
            else -> throw IllegalArgumentException("Неподдерживаемый тип")
        }
    }

    private fun validateNumber(number: Number): Boolean {
        return when (number) {
            is Int -> number > 0
            is Double -> number > 0.0
            else -> throw IllegalArgumentException("Неподдерживаемый числовой тип")
        }
    }

    private fun validateString(string: String): Boolean {
        return string.length > 5
    }

    fun validateWithMessage(value: T): String {
        return try {
            val isValid = validate(value)
            if (isValid) "Значение '$value' прошло проверку"
            else "Значение '$value' не прошло проверку"
        } catch (e: IllegalArgumentException) {
            "Ошибка: ${e.message}"
        }
    }
}

fun t3(){
    val validator = ValueValidator<Any>()

    println("Проверка чисел")
    println(validator.validateWithMessage(3.14))
    println(validator.validateWithMessage(-2.5))

    println("\nПроверка строк")
    println(validator.validateWithMessage("Hello World"))
    println(validator.validateWithMessage("Hi"))

    // Тестирование с неподдерживаемыми типами
    println("\nПроверка других типов")
    println(validator.validateWithMessage(true))
    println(validator.validateWithMessage(listOf(1, 2, 3)))
}

fun main() {
    t1()
    t2()
    t3()
}