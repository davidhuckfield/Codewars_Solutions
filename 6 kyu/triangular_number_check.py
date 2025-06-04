# link : https://www.codewars.com/kata/557e8a141ca1f4caa70000a6/train/python

import math

def is_triangle_number(number):
    if isinstance(number, bool):
        return False
    if number == 0:
        return True
    if not isinstance(number, (int, float)) or number < 1:
        return False
    n = (-1 + math.sqrt(1+8*number)) /2
    return n.is_integer()
    