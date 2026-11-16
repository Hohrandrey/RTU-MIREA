abstract class Animal(
    var name: String,
    var hunger: Int = 50,
    var energy: Int = 80,
    var happiness: Int = 60
) {
    abstract fun wayOfBirth()
    abstract fun move()

    open fun eat() {
        hunger = maxOf(0, hunger - 30)
        energy = minOf(100, energy + 10)
        println("$name ест. Голод: $hunger%, Энергия: $energy%")
    }

    open fun sleep() {
        energy = minOf(100, energy + 40)
        hunger = minOf(100, hunger + 20)
        println("$name спит. Энергия: $energy%, Голод: $hunger%")
    }

    open fun play() {
        happiness = minOf(100, happiness + 25)
        energy = maxOf(0, energy - 15)
        hunger = minOf(100, hunger + 10)
        println("$name играет. Счастье: $happiness%, Энергия: $energy%")
    }

    fun displayStatus() {
        println("$name: Голод = $hunger%, Энергия = $energy%, Счастье = $happiness%")
    }

    fun timePasses() {
        hunger = minOf(100, hunger + 10)
        energy = maxOf(0, energy - 5)
        happiness = maxOf(0, happiness - 3)
    }
}

abstract class Mammal(name: String) : Animal(name) {
    override fun wayOfBirth() {
        println("$name - млекопитающее, рожает живых детенышей")
    }
}

abstract class Fish(name: String) : Animal(name) {
    override fun wayOfBirth() {
        println("$name - рыба, мечет икру")
    }
}

abstract class Bird(name: String) : Animal(name) {
    override fun wayOfBirth() {
        println("$name - птица, откладывает яйца")
    }
}

interface Flying {
    fun fly()
}

interface Swimming {
    fun swim()
}

class Bat : Mammal("Летучая мышь"), Flying {
    override fun move() {
        fly()
    }

    override fun fly() {
        energy = maxOf(0, energy - 10)
        hunger = minOf(100, hunger + 5)
        println("Летучая мышь летает медленно. Энергия: $energy%")
    }
}

class Dolphin : Mammal("Дельфин"), Swimming {
    override fun move() {
        swim()
    }

    override fun swim() {
        energy = maxOf(0, energy - 15)
        hunger = minOf(100, hunger + 8)
        println("Дельфин плавает быстро. Энергия: $energy%")
    }
}

class GoldFish : Fish("Золотая рыбка"), Swimming {
    override fun move() {
        swim()
    }

    override fun swim() {
        energy = maxOf(0, energy - 5)
        hunger = minOf(100, hunger + 3)
        println("Золотая рыбка плавает медленно. Энергия: $energy%")
    }
}

class Eagle : Bird("Орел"), Flying {
    override fun move() {
        fly()
    }

    override fun fly() {
        energy = maxOf(0, energy - 20)
        hunger = minOf(100, hunger + 12)
        println("Орел летает быстро. Энергия: $energy%")
    }
}

fun t1() {
    val animals = listOf(
        Bat(),
        Dolphin(),
        GoldFish(),
        Eagle()
    )

    var selectedAnimal: Animal? = null

    while (true) {
        println("\nСИСТЕМА УПРАВЛЕНИЯ ЖИВОТНЫМИ")
        println("1. Просмотреть всех животных")
        println("2. Выбрать животное для взаимодействия")
        println("3. Взаимодействовать с выбранным животным")
        println("4. Показать состояние выбранного животного")
        println("5. Показать способы рождения всех животных")
        println("6. Симулировать прошествие времени")
        println("7. Выйти")

        if (selectedAnimal != null) {
            println("Выбрано: ${selectedAnimal.name}")
        }

        print("Выберите действие (1-7): ")

        when (readln().toIntOrNull()) {
            1 -> {
                println("\nСписок животных:")
                println("-".repeat(30))
                animals.forEachIndexed { index, animal ->
                    print("${index + 1}. ")
                    animal.displayStatus()
                }
            }
            2 -> {
                println("\nСписок животных:")
                animals.forEachIndexed { index, animal ->
                    println("${index + 1}. ${animal.name}")
                }

                print("Выберите животное (1-${animals.size}): ")
                val choice = readln().toIntOrNull()
                if (choice != null && choice in 1..animals.size) {
                    selectedAnimal = animals[choice - 1]
                    println("Выбрано: ${selectedAnimal.name}")
                } else {
                    println("Неверный выбор!")
                }
            }
            3 -> {
                if (selectedAnimal == null) {
                    println("Сначала выберите животное!")
                } else {
                    println("\nВЗАИМОДЕЙСТВИЕ С ${selectedAnimal.name}")
                    println("1. Покормить")
                    println("2. Уложить спать")
                    println("3. Поиграть")
                    println("4. Заставить двигаться")
                    println("5. Показать способ рождения")
                    print("Выберите действие (1-5): ")

                    when (readln().toIntOrNull()) {
                        1 -> selectedAnimal.eat()
                        2 -> selectedAnimal.sleep()
                        3 -> selectedAnimal.play()
                        4 -> selectedAnimal.move()
                        5 -> selectedAnimal.wayOfBirth()
                        else -> println("Неверный выбор!")
                    }
                }
            }
            4 -> {
                if (selectedAnimal == null) {
                    println("Сначала выберите животное!")
                } else {
                    println("\nСОСТОЯНИЕ ЖИВОТНОГО:")
                    selectedAnimal.displayStatus()
                }
            }
            5 -> {
                println("\nСпособы рождения:")
                println("-".repeat(30))
                animals.forEach { animal ->
                    animal.wayOfBirth()
                }
            }
            6 -> {
                println("\nСимуляция времени:")
                animals.forEach { animal ->
                    animal.timePasses()
                }
                println("Состояние всех животных обновлено!")
            }
            7 -> {
                println("До свидания!")
                return
            }
            else -> println("Неверный выбор! Попробуйте снова.")
        }
    }
}


enum class DeviceType {
    COMPUTER, PHONE, TABLET, SMARTWATCH, OTHER
}


data class ElectronicDevice(
    val type: DeviceType,
    val brand: String,
    val model: String
)


class BestRepairEver {
    fun canRepair(device: ElectronicDevice): Boolean {
        return when (device.type) {
            DeviceType.COMPUTER, DeviceType.PHONE -> true
            else -> false
        }
    }

    fun checkAndPrintRepairStatus(device: ElectronicDevice) {
        val canFix = canRepair(device)
        val status = if (canFix) "МОЖЕМ" else "НЕ МОЖЕМ"
        println("Мастерская BestRepairEver $status починить ${device.type} ${device.brand} ${device.model}")
    }
}

fun t2(){
    val repairShop = BestRepairEver()
    val devices = listOf(
        ElectronicDevice(DeviceType.COMPUTER, "Dell", "XPS 13"),
        ElectronicDevice(DeviceType.PHONE, "Samsung", "Galaxy S21"),
        ElectronicDevice(DeviceType.TABLET, "Apple", "iPad Pro"),
        ElectronicDevice(DeviceType.SMARTWATCH, "Apple", "Watch Series 7"),
        ElectronicDevice(DeviceType.OTHER, "Sony", "PlayStation 5")
    )

    println("\n=== Проверка устройств в мастерской BestRepairEver ===")
    println("Специализация: компьютеры и телефоны\n")

    devices.forEach { device ->
        repairShop.checkAndPrintRepairStatus(device)
    }

    println("\n=== Прямое использование метода canRepair ===")
    val testPhone = ElectronicDevice(DeviceType.PHONE, "Xiaomi", "Redmi Note 10")
    val testTablet = ElectronicDevice(DeviceType.TABLET, "Samsung", "Galaxy Tab S7")

    println("Телефон ${testPhone.brand} ${testPhone.model}: ${repairShop.canRepair(testPhone)}")
    println("Планшет ${testTablet.brand} ${testTablet.model}: ${repairShop.canRepair(testTablet)}")
}

fun main() {
    t1()
    t2()
}