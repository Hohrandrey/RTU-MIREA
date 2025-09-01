fun num1() {
    val dnk = readln()
    val countA = dnk.count { it == 'A' }
    val countT = dnk.count { it == 'T' }
    val countG = dnk.count { it == 'G' }
    val countC = dnk.count { it == 'C' }
    println("$countA $countT $countG $countC")
}


fun num2() {
    var n = readln().toInt()
    val count8 = n / 8
    n = n % 8
    val count4 = n / 4
    n = n % 4
    val count2 = n/2
    n = n % 2
    val count1 = n/1
    println("$count8 $count4 $count2 $count1")
}


fun main() {
    num1()
    num2()
}