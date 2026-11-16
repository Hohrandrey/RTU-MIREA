data class Order(
    val orderId: Int,
    val customerId: Int,
    val products: List<String>,
    val totalPrice: Double
)

class OrderAnalyzer {
    private val orders = mutableListOf<Order>()

    fun addOrder(order: Order) {
        orders.add(order)
    }

    fun removeOrdersBelowPrice(threshold: Double) {
        orders.removeAll { it.totalPrice < threshold }
    }

    fun getUniqueCustomers(): List<Int> {
        return orders.map { it.customerId }.distinct()
    }

    fun getTotalRevenue(): Double {
        return orders.sumOf { it.totalPrice }
    }

    fun getTop3MostExpensiveOrders(): List<Order> {
        return orders.sortedByDescending { it.totalPrice }.take(3)
    }

    fun getAllOrders(): List<Order> {
        return orders.toList()
    }
}

fun t1() {
    val analyzer = OrderAnalyzer()

    val initialOrders = listOf(
        Order(1, 101, listOf("Ноутбук", "Мышка"), 75000.0),
        Order(2, 102, listOf("Смартфон"), 45000.0),
        Order(3, 103, listOf("Наушники", "Чехол"), 12000.0),
        Order(4, 101, listOf("Планшет"), 35000.0),
        Order(5, 104, listOf("Монитор", "Клавиатура"), 28000.0)
    )

    initialOrders.forEach { analyzer.addOrder(it) }

    println("Все заказы:")
    analyzer.getAllOrders().forEach { println(it) }

    println("\nДобавление нового заказа")
    val newOrder = Order(6, 105, listOf("Принтер", "Картридж"), 22000.0)
    analyzer.addOrder(newOrder)
    println("Добавлен заказ: $newOrder")

    println("\nУдаление заказов с суммой меньше 27000")
    analyzer.removeOrdersBelowPrice(27000.0)
    println("Заказы после удаления:")
    analyzer.getAllOrders().forEach { println(it) }

    println("\nСписок уникальных клиентов")
    val uniqueCustomers = analyzer.getUniqueCustomers()
    println("Уникальные customerId: $uniqueCustomers")

    println("\nОбщий доход магазина")
    val totalRevenue = analyzer.getTotalRevenue()
    println("Общий доход: $totalRevenue")

    println("\nТоп-3 самых дорогих заказов")
    val top3Orders = analyzer.getTop3MostExpensiveOrders()
    top3Orders.forEachIndexed { index, order ->
        println("${index + 1}. Заказ №${order.orderId} - ${order.totalPrice}")
    }
}

data class Sale(
    val date: String,
    val product: String,
    val quantity: Int,
    val pricePerUnit: Double
)

fun t2(){
    val sales = listOf(
        Sale("2024-01-15", "Ноутбук", 2, 50000.0),
        Sale("2024-01-20", "Смартфон", 3, 30000.0),
        Sale("2024-02-10", "Ноутбук", 1, 55000.0),
        Sale("2024-02-15", "Наушники", 5, 8000.0),
        Sale("2024-03-05", "Смартфон", 2, 32000.0)
    )

    println("\n\nВсе продажи:")
    sales.forEach { println(it) }

    val totalRevenue = sales.sumOf { it.quantity * it.pricePerUnit }
    println("\nОбщая выручка: $totalRevenue")

    println("\nПродажи по продуктам:")
    val productsMap = mutableMapOf<String, Int>()
    sales.forEach {
        productsMap[it.product] = productsMap.getOrDefault(it.product, 0) + it.quantity
    }
    productsMap.forEach { (product, quantity) ->
        println("$product: $quantity шт.")
    }

    println("\nПродажи за январь:")
    val januarySales = sales.filter { it.date.startsWith("2024-01") }
    januarySales.forEach { println("$it") }

    val revenueByProduct = mutableMapOf<String, Double>()
    sales.forEach {
        val revenue = it.quantity * it.pricePerUnit
        revenueByProduct[it.product] = revenueByProduct.getOrDefault(it.product, 0.0) + revenue
    }

    val topProduct = revenueByProduct.maxByOrNull { it.value }
    println("\nСамый прибыльный продукт: ${topProduct?.key ?: "нет данных"}")
}

fun main(){
    t1()
    t2()
}