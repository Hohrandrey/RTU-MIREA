import pytest
from Nikita_mutant import clean_text, count_characters, count_words, count_sentences, word_frequency, text_statistics


class TestTextAnalysis:
    """Тесты для анализа текста"""

    def test_clean_text_normal(self):
        """Тест очистки нормального текста"""
        text = "Hello, World! 123 Test."
        result = clean_text(text)
        expected = "hello world test"
        assert result == expected

    def test_clean_text_empty(self):
        """Тест очистки пустого текста"""
        assert clean_text("") == ""
        assert clean_text("   ") == ""

    def test_clean_text_only_punctuation(self):
        """Тест очистки текста только с пунктуацией"""
        text = "!@#$%^&*()"
        result = clean_text(text)
        assert result == ""

    def test_clean_text_only_numbers(self):
        """Тест очистки текста только с числами"""
        text = "123 456 789"
        result = clean_text(text)
        assert result == ""

    def test_count_characters_with_spaces(self):
        """Тест подсчета символов с пробелами"""
        text = "Hello World"
        assert count_characters(text) == 11
        assert count_characters(" ") == 1
        assert count_characters("") == 0

    def test_count_characters_without_spaces(self):
        """Тест подсчета символов без пробелов"""
        text = "Hello World"
        assert count_characters(text, False) == 10
        assert count_characters(" ", False) == 0
        assert count_characters("", False) == 0

    def test_count_words_normal(self):
        """Тест подсчета слов в нормальном тексте"""
        text = "Hello world this is a test"
        assert count_words(text) == 6

    def test_count_words_empty(self):
        """Тест подсчета слов в пустом тексте"""
        assert count_words("") == 0
        assert count_words("   ") == 0
        assert count_words("!@#$") == 0

    def test_count_words_with_punctuation(self):
        """Тест подсчета слов с пунктуацией"""
        text = "Hello, world! Test... Case?"
        assert count_words(text) == 4

    def test_count_words_with_numbers(self):
        """Тест подсчета слов с числами"""
        text = "There are 123 apples and 456 bananas"
        assert count_words(text) == 5

    def test_count_sentences_normal(self):
        """Тест подсчета предложений в нормальном тексте"""
        text = "Hello world. This is a test! How are you?"
        assert count_sentences(text) == 3

    def test_count_sentences_empty(self):
        """Тест подсчета предложений в пустом тексте"""
        assert count_sentences("") == 0
        assert count_sentences("   ") == 0

    def test_count_sentences_multiple_punctuation(self):
        """Тест подсчета предложений с несколькими знаками препинания"""
        text = "Hello!!! How are you?? Fine..."
        assert count_sentences(text) == 3

    def test_count_sentences_no_ending_punctuation(self):
        """Тест подсчета предложений без конечных знаков препинания"""
        text = "Hello world This is a test"
        assert count_sentences(text) == 1

    def test_word_frequency_normal(self):
        """Тест частоты слов в нормальном тексте"""
        text = "hello world hello test world python"
        result = word_frequency(text, 3)
        expected = {'hello': 2, 'world': 2, 'test': 1}
        assert result == expected

    def test_word_frequency_empty(self):
        """Тест частоты слов в пустом тексте"""
        assert word_frequency("") == {}
        assert word_frequency("   ") == {}

    def test_word_frequency_case_sensitivity(self):
        """Тест чувствительности к регистру"""
        text = "Hello hello HELLO"
        result = word_frequency(text)
        assert result == {'hello': 3}

    def test_word_frequency_top_n(self):
        """Тест ограничения по количеству слов"""
        text = "a b c d e a b c a b a"
        result = word_frequency(text, 2)
        assert len(result) == 2
        assert result == {'a': 4, 'b': 3}

    def test_edge_cases(self):
        """Тест граничных случаев"""
        # Текст только с пробелами
        assert count_words("       ") == 0
        assert count_sentences("       ") == 0

        # Текст с переносами строк
        text = "Hello\nworld\n\nTest"
        assert count_words(text) == 3
        assert count_sentences(text) == 1

        # Текст с табуляцией
        text = "Hello\tworld\tTest"
        assert count_words(text) == 3

    def test_russian_text(self):
        """Тест с русским текстом"""
        text = "Привет, мир! Это тест."
        assert count_words(text) == 4
        assert count_sentences(text) == 3

    def test_mixed_languages(self):
        """Тест со смешанными языками"""
        text = "Hello мир! 123 test тест."
        assert count_words(text) == 4
        cleaned = clean_text(text)
        assert cleaned == "hello мир test тест"

    def test_special_cases(self):
        """Тест специальных случаев, которые могут вызвать ошибки"""
        # Дефисы и апострофы
        text = "state-of-the-art don't can't"
        result = clean_text(text)
        # В текущей реализации дефисы и апострофы удаляются
        assert result == "state of the art don t can t"

        # Многоточия
        text = "Hello... World.... Test..."
        assert count_sentences(text) == 3


def test_integration():
    """Интеграционный тест"""
    sample_text = "Hello world. This is a test! How are you? I'm fine."

    # Проверяем, что все функции работают без ошибок
    assert count_characters(sample_text) > 0
    assert count_characters(sample_text, False) > 0
    assert count_words(sample_text) > 0
    assert count_sentences(sample_text) > 0
    assert len(word_frequency(sample_text)) > 0

    # Проверяем согласованность результатов
    word_count = count_words(sample_text)
    freq = word_frequency(sample_text, word_count + 10)  # Берем больше, чем слов в тексте
    total_words_in_freq = sum(freq.values())
    assert total_words_in_freq == word_count


if __name__ == "__main__":
    # Запуск тестов
    pytest.main([__file__, "-v"])