import re
from collections import Counter
import string


def clean_text(text):
    text = re.sub(r'[^\w\s]', ' ', text)
    text = re.sub(r'\d+', ' ', text)
    text = re.sub(r'\s+', ' ', text)
    return text.lower().strip()


def count_characters(text, include_spaces=True):
    if include_spaces:
        return len(text)
    else:
        return len(text.replace(' ', ''))


def count_words(text):
    cleaned_text = clean_text(text)
    if not cleaned_text:
        return 0

    words = cleaned_text.split()
    return len(words)


def count_sentences(text):
    sentences = [s.strip() for s in re.split(r'[.!?]+', text) if s.strip()]
    return len(sentences)


def word_frequency(text, top_n=10):
    cleaned_text = clean_text(text)
    if not cleaned_text:
        return {}

    words = cleaned_text.split()
    word_counts = Counter(words)
    return dict(word_counts.most_common(top_n))


def text_statistics(text):
    print("=" * 50)
    print("АНАЛИЗ ТЕКСТА")
    print("=" * 50)

    print(f"Общее количество символов (с пробелами): {count_characters(text, False)}")
    print(f"Общее количество символов (без пробелов): {count_characters(text)}")
    print(f"Количество слов: {count_words(text)}")
    print(f"Количество предложений: {count_sentences(text)}")

    freq = word_frequency(text, 5)
    if freq:
        print("\nТоп-5 самых частых слов:")
        for word, count in freq.items():
            print(f"  '{word}': {count} раз")


if __name__ == "__main__":
    sample_text = """
    Python - это мощный и простой язык программирования. Python популярен в веб-разработке, 
    анализе данных и искусственном интеллекте. Python имеет простой синтаксис, который 
    легко изучать. Многие программисты любят Python за его читабельность и универсальность.
    """

    text_statistics(sample_text)