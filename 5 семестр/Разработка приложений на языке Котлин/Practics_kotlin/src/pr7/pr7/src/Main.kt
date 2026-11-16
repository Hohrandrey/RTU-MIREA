import java.util.UUID

abstract class MenuItem(){
    abstract val name: String
    abstract val basePrice: Double
    final val id: String = UUID.randomUUID().toString()

    abstract fun calculateFinalPrice(): Double
}

data class Ingredient(val name: String, val isAllergen: Boolean)

enum class Size {
    SMALL, MEDIUM, LARGE
}


class Drink(override val name: String, override val basePrice: Double, val size: Size ): MenuItem(){
    override fun calculateFinalPrice(): Double{
        return when(size) {
            Size.SMALL -> basePrice * 1.0
            Size.MEDIUM -> basePrice * 1.5
            Size.LARGE -> basePrice * 2.0
        }
    }
}

class Food(override val name: String, override val basePrice: Double, val ingredients: List<Ingredient>): MenuItem(){
    val isVegetarian: Boolean
        get() = ingredients.none { it.isAllergen }

    override fun calculateFinalPrice(): Double {
        return basePrice
    }
}

fun main() {
    // напитки
    val smallCoffee = Drink("Кофе", 100.0, Size.SMALL)
    val largeTea = Drink("Чай", 80.0, Size.LARGE)

    println("${smallCoffee.name}: ${smallCoffee.calculateFinalPrice()} руб.")
    println("${largeTea.name}: ${largeTea.calculateFinalPrice()} руб.")

    //  ингредиенты
    val pastaIngredients = listOf(
        Ingredient("Макароны", false),
        Ingredient("Сыр", false),
        Ingredient("Орехи", true)
    )

    val saladIngredients = listOf(
        Ingredient("Помидоры", false),
        Ingredient("Огурцы", false),
        Ingredient("Лук", false)
    )

    // блюда
    val pasta = Food("Паста", 250.0, pastaIngredients)
    val salad = Food("Салат", 180.0, saladIngredients)

    println("${pasta.name}: ${pasta.calculateFinalPrice()} руб., вегетарианское: ${pasta.isVegetarian}")
    println("${salad.name}: ${salad.calculateFinalPrice()} руб., вегетарианское: ${salad.isVegetarian}")

    println("ID кофе: ${smallCoffee.id}")
    println("ID чая: ${largeTea.id}")
    println("ID пасты: ${pasta.id}")
    println("ID салата: ${salad.id}")
}