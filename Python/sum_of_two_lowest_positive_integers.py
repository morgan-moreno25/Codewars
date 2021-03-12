"""
Sum Of Two Lowest Positive Integers: https://www.codewars.com/kata/558fc85d8fd1938afb000014/train/python

Instructions:
Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers.
No floats or non-positive integers will be passed.

Example:
    sum_of_two_lowest([19, 5, 42, 2, 77]) = 7
"""
import unittest
from typing import List


def sum_of_two_lowest(integers: List[int]) -> int:
    integers.sort()

    return integers[0] + integers[1]


class TestSumOfTwoLowest(unittest.TestCase):

    def test_returns_correct_sum(self):
        self.assertEqual(sum_of_two_lowest([5, 8, 12, 18, 22]), 13)
        self.assertEqual(sum_of_two_lowest([7, 15, 12, 18, 22]), 19)
        self.assertEqual(sum_of_two_lowest([25, 42, 12, 18, 22]), 30)


if __name__ == '__main__':
    unittest.main()
