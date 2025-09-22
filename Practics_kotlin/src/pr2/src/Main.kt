fun t1() {
    val n = readln().toInt()
    val array = Array(n) { readln().toDouble() }
    val sum = array.sum()
    println("Среднее арифметическое массива: ${sum / n}")
}


fun t2(){
    val N = readln().toInt()
    val array = Array(N) { readln().toInt() }
    var current = array[0]
    var count = 1
    for (i in 1 until N){
        if (array[i] == current){
            count++
        }
        else {
            println("$count $current")
            current = array[i]
            count = 1
        }
    }
    println("$count $current")
}


fun t3() {
    val N = readln().toInt()
    val array = Array(N) { readln() }
    for (a in 0 until N - 1) {
        for (b in a+1 until N) {
            if (array[a] == array[b]) {
                println("Дубликат: ${array[b]}")
                break
            }
        }
    }
}


fun main() {
    t1()
    t2()
    t3()
}