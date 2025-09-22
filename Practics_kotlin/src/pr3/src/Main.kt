
fun t1(){
    val rand = (0..1000).random()
    println("Введите число: ")я
    println(rand)
    var imp = readln().toInt()
    while (rand  != imp){
        if (imp < 0)  return
        if (rand > imp) {
            println("Это число меньше загаданного.")
            imp = readln().toInt()
        }
        else {
            println("Это число больше загаданного.")
            imp = readln().toInt()
        }
    }
    println("Победа!")
}


fun t2(){

    println("Введите строку ЗАГЛАВНЫХ РУССКИХ букв: ")

    val morseCodes = arrayOf(
        ".-", "-...", ".--", "--.", "-..", ".", "...-", "--..", "..", ".---",
        "-.-", ".-..", "--", "-.", "---", ".--.", ".-.", "...", "-", "..-",
        "..-.", "....", "-.-.", "---.", "----", "--.-", "--.--", "-.--", "-..-",
        "..-..", "..--", ".-.-"
    )

    val S = readln()

    val result = StringBuilder()
    for (char in S) {
        val S = char - 'А'
        result.append(morseCodes[S]).append(" ")
    }

    println("Результат: ${result}")
}


fun dop(){
    println("Введите длину пароля (Более 8 символов):")

    var N = readln().toInt()
    val uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    val lowercase = "abcdefghijklmnopqrstuvwxyz"
    val digits = "0123456789"
    val special = "_*-"
    val allCharacters = uppercase + lowercase + digits + special
    val password = StringBuilder()

    password.append(uppercase.random())
    password.append(lowercase.random())
    password.append(digits.random())
    password.append(special.random())

    while (N<8){
        println("Введите длину пароля (не менее 8 символов):")
        N = readln().toInt()
    }

    for (i in 4 until N) {
        password.append(allCharacters.random())
    }

    println("Пароль: ${password.toList().shuffled().joinToString("")}")
}


fun main() {
    t1()
    t2()
    dop()
}