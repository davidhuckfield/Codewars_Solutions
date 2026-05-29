# link : https://www.codewars.com/kata/537baa6f8f4b300b5900106c/train/python

import math
def circle_area(r):
    if r < 0:
        raise ValueError("Radius must be a positive number")
    return math.pi*(r**2)

print(circle_area(5))