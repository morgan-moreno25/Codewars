"""
Instructions from Codewars: https://www.codewars.com/kata/5390bac347d09b7da40006f6/train/python

Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is
also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost
always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are
expected to be in the example below.

Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden
Smith, but they are not capitalized in the same way he originally typed them.

Example:
    Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
    Jaden-Cased: "How Can Mirrors Be Real If Our Eyes Aren't Real"
"""

import unittest


def to_jaden_case(string: str) -> str:
    words = string.split(' ')

    for x in range(0, len(words)):
        words[x] = words[x].capitalize()

    return ' '.join(words)


class TestJadenCase(unittest.TestCase):

    def test_codewars_quote_to_jaden_case(self):
        quote = "How can mirrors be real if our eyes aren't real"
        self.assertEqual(to_jaden_case(quote), "How Can Mirrors Be Real If Our Eyes Aren't Real")

    def test_custom_quote_to_jaden_case(self):
        # S/O to Kanye West
        quote = "Mayonnaise colored benz, i push miracle whips"
        self.assertEqual(to_jaden_case(quote), "Mayonnaise Colored Benz, I Push Miracle Whips")


if __name__ == '__main__':
    unittest.main()
