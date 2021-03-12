"""
Find The Divisors!: https://www.codewars.com/kata/544aed4c4a30184e960010f4/train/python

Instructions:
Create a function named `divisors/Divisors` that takes an integer n > 1 and returns an array with all of the integer's
divisors (except for 1 and the number itself), from smallest to largest. If the number is prime return the string
'{integer} is prime'

Example:
    divisors(12) - Should return [2, 3, 4, 6]
    divisors(25) - Should return [5]
    divisors(13) - Should return "13 is prime"
"""

import unittest


def divisors(i: int):
    divs = [x for x in range(2, i-1) if i % x == 0]

    return divs if len(divs) > 0 else f'{i} is prime'


class TestDivisors(unittest.TestCase):

    def test_not_prime_integer_returns_correct_list_of_divisors(self):
        self.assertEqual(divisors(15), [3, 5])
        self.assertEqual(divisors(253), [11, 23])
        self.assertEqual(divisors(24), [2, 3, 4, 6, 8, 12])
        self.assertEqual(divisors(25), [5])

    def test_prime_integer_returns_correct_string(self):
        self.assertEqual(divisors(13), "13 is prime")
        self.assertEqual(divisors(3), "3 is prime")
        self.assertEqual(divisors(29), "29 is prime")


if __name__ == '__main__':
    unittest.main()
