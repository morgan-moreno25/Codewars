"""
Get the Middle Character: https://www.codewars.com/kata/56747fd5cb988479af000028/python

Instructions:
You are going to be given a word. Your job is to return the middle charcter of the word. If the word's length is odd,
return the middle character. If the word's length is even, return the middle 2 characters.

Examples:
    getMiddle('test') = 'es'
    getMiddle('testing') = 't'
    getMiddle('middle') = 'dd'
    getMiddle('A') = 'A'
"""
import unittest


def get_middle(string: str) -> str:
    if len(string) == 1 or len(string) == 2:
        return string

    if len(string) % 2 == 0:
        middle = int(len(string) / 2)
        return f'{string[middle - 1]}{string[middle]}'
    else:
        middle = int(len(string)/2)
        return f'{string[middle]}'


class TestGetMiddle(unittest.TestCase):

    def test_odd_length_strings(self):
        self.assertEqual(get_middle('testing'), 't')
        self.assertEqual(get_middle('character'), 'a')
        self.assertEqual(get_middle('kitty'), 't')

    def test_single_character_strings(self):
        self.assertEqual(get_middle('A'), 'A')
        self.assertEqual(get_middle('b'), 'b')

    def test_even_length_strings(self):
        self.assertEqual(get_middle('test'), 'es')
        self.assertEqual(get_middle('middle'), 'dd')
        self.assertEqual(get_middle('of'), 'of')


if __name__ == '__main__':
    unittest.main()
