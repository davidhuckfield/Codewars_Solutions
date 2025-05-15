# link : https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec/train/python

import math

def persistence(n):
    count = 0
    while(len(str(n)) != 1):
        digits = map(int, str(n))
        product = math.prod(digits)
        count += 1
        n = product
    return count


print(persistence(39))
print(persistence(4))
print(persistence(25))
print(persistence(999))