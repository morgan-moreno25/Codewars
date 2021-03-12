"""
Isograms: https://www.codewars.com/kata/54ba84be607a92aa900000f1/train/python

Instructions:
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines
whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Examples:
    is_isogram("Dermatoglyphics") == True
    is_isogram("aba") == False
    is_isogram("moOse") == False
"""

import unittest


def is_isogram(string: str):
    letters = []

    if string == '':
        return True

    for letter in string:
        if letter.lower() in letters:
            return False
        else:
            letters.append(letter.lower())

    return True


class TestIsIsogram(unittest.TestCase):

    def test_isograms_returns_true(self):
        self.assertEqual(is_isogram('Dermatoglyphics'), True)
        self.assertEqual(is_isogram('isogram'), True)
        self.assertEqual(is_isogram(''), True)

    def test_non_isograms_returns_false(self):
        self.assertEqual(is_isogram('aba'), False)
        self.assertEqual(is_isogram('moOse'), False)
        self.assertEqual(is_isogram('isIsogram'), False)


if __name__ == '__main__':
    unittest.main()
