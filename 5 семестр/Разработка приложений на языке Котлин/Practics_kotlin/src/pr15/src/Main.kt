data class Player(
    val nickname: String,
    val level: Int,
    val score: Int,
    val achievements: List<String>,
    val playTimeHours: Int
)

fun main() {
    val players = sequenceOf(
        Player("Shadow", 15, 12500, listOf("Легенда", "Мастер битвы"), 85),
        Player("Phoenix", 8, 7800, listOf("Новичок месяца"), 35),
        Player("Titan", 18, 16500, listOf("Легенда", "Титанический"), 180),
        Player("Raven", 5, 3200, listOf("Первые шаги"), 15),
        Player("Viper", 25, 24500, listOf("Легенда", "Король арены"), 320),
        Player("Wolf", 9, 6100, listOf("Охотник"), 48),
        Player("Blade", 22, 21500, listOf("Легенда", "Бессмертный"), 210),
        Player("Storm", 12, 9500, listOf("Завоеватель"), 62),
        Player("Dragon", 20, 19500, listOf("Легенда", "Повелитель стихий"), 250),
        Player("Ghost", 14, 13200, listOf("Невидимка"), 95),
        Player("King", 11, 11000, listOf("Королевская кровь"), 72),
        Player("Hunter", 7, 5400, listOf("Следопыт"), 29),
        Player("Samurai", 16, 14800, listOf("Легенда", "Мастер клинка"), 165)
    )


    val filteredByLevel = players.filter { it.level > 10 }
    println("\nИгроки уровня > 10")
    filteredByLevel.forEach { player ->
        println("${player.nickname} - уровень: ${player.level}")
    }

    val hasLegendAchievement = players.any { it.achievements.contains("Легенда") }
    println("\nПроверка достижения 'Легенда'")
    println("Есть игроки с достижением 'Легенда': ${if (hasLegendAchievement) "Да" else "Нет"}")

    val playerStats = players.map { player ->
        "Игрок: ${player.nickname}, Уровень: ${player.level}, Очки: ${player.score}"
    }
    println("\nСтатистика игроков")
    playerStats.forEach { println(it) }

    val groupedByTime = players.groupBy { player ->
        when {
            player.playTimeHours < 50 -> "Менее 50 часов"
            player.playTimeHours in 50..200 -> "От 50 до 200 часов"
            else -> "Более 200 часов"
        }
    }

    println("\nГруппировка по времени игры")
    groupedByTime.forEach { (range, playersInGroup) ->
        println("$range (${playersInGroup.size} игроков):")
        playersInGroup.forEach { player ->
            println("  ${player.nickname} - ${player.playTimeHours} часов")
        }
    }

    val sortedByScore = players.sortedByDescending { it.score }
    println("\nИгроки отсортированные по убыванию очков")
    sortedByScore.forEachIndexed { index, player ->
        println("${index + 1}. ${player.nickname} - ${player.score} очков")
    }

    println("\nСредний уровень по группам времени")
    groupedByTime.forEach { (range, playersInGroup) ->
        val averageLevel = playersInGroup.map { it.level }.average()
        println("$range: средний уровень = ${"%.2f".format(averageLevel)}")
    }
}