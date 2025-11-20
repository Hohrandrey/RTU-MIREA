from random import randint
from collections import Counter
import math


def gcd(a, b):
    while b != 0:
        a, b = b, a % b
    return a


def is_prime(n, k=5):
    if n < 2:
        return False
    for _ in range(k):
        a = randint(2, n - 1)
        if pow(a, n - 1, n) != 1:
            return False
    return True


def generate_primes():
    while True:
        p = randint(2 ** 50, 2 ** 51)
        if p % 4 == 3 and is_prime(p):
            break

    while True:
        q = randint(2 ** 50, 2 ** 51)
        if q % 4 == 3 and is_prime(q) and q != p:
            break

    return p, q


def bbs_generator(num_bits=10000):
    p, q = generate_primes()
    N = p * q
    print(f"p = {p}, q = {q}, N = {N}")

    while True:
        X = randint(2 ** 40, 2 ** 40)
        if gcd(X, N) == 1:
            break

    X_current = pow(X, 2, N)

    gamma_bits = []

    for i in range(num_bits):
        X_current = pow(X_current, 2, N)
        bit = X_current % 2
        gamma_bits.append(str(bit))

    gamma_string = ''.join(gamma_bits)
    return gamma_string


def n_gram_counts(sequence, n):
    """Подсчитывает частоты n-грамм в последовательности"""
    counts = Counter()
    for i in range(len(sequence) - n + 1):
        n_gram = sequence[i:i + n]
        counts[n_gram] += 1
    return counts


def check_golomb_postulates(sequence):
    L = len(sequence)

    zeros_count = sequence.count('0')
    ones_count = sequence.count('1')

    print(f"   Отношение 1/0: {ones_count / zeros_count:.4f}")

    print("\n" + "=" * 50)

    max_n = min(10, int(math.log2(L)))


    for n in range(1, max_n + 1):
        counts = n_gram_counts(sequence, n)
        total_ngrams = sum(counts.values())

        print(f"\n   {n}-граммы:")
        print("   n-грамма | Количество | Частота (%)")
        print("   " + "-" * 35)

        displayed = 0

        for ngram, count in sorted(counts.items()):
            frequency = count / total_ngrams * 100
            print(f"   {ngram:>9} | {count:>10} | {frequency:>8.3f}%")
            displayed += 1
            if displayed >= 10:
                break




if __name__ == "__main__":
    gamma = bbs_generator(10000)

    check_golomb_postulates(gamma)

    with open("bbs_output.txt", "w") as f:
        f.write(gamma)