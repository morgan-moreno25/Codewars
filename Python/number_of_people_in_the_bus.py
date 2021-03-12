"""
Number of People in The Bus: https://www.codewars.com/kata/5648b12ce68d9daa6b000099/train/python

Instructions:
There is a bus moving in the city, and it takes and drops some people in each bus stop.

You are provided with a list of integer tuples. Each integer tupe has two items which represent number of people getting
into the bus (1st) and number of people getting off (2nd).

Your task is to the number of people who are still in the bus after the last bus station. Even though it is the last bus
stop, the bus is not empty and some people are still in the bus.

Please keep in mind that the test cases ensure that the number of people in the bus is always >=0. So return integer
can't be negative.

The second value in the first integer array is 0
"""
import unittest
from typing import List, Tuple


def number_of_people_in_bus(bus_stops: List[Tuple[int, int]]) -> int:
    passengers = 0

    for stop in bus_stops:
        passengers += (stop[0] - stop[1])

    return passengers


class TestNumberOfPeopleInBus(unittest.TestCase):

    def test_returns_correct_count(self):
        self.assertEqual(number_of_people_in_bus([(10, 0), (3, 5), (5, 8)]), 5)
        self.assertEqual(number_of_people_in_bus([(3, 0), (9, 1), (4, 10), (12, 2), (6, 1), (7, 10)]), 17)
        self.assertEqual(number_of_people_in_bus([(3, 0), (9, 1), (4, 8), (12, 2), (6, 1), (7, 8)]), 21)


if __name__ == '__main__':
    unittest.main()
