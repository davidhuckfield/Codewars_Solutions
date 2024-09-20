# link : https://www.codewars.com/kata/57faa6ff9610ce181b000028/train/python

from functools import reduce

def crap(garden, bags, cap):
    flattened = reduce(lambda a,b: a+b, garden)
    if ("D" in flattened):
        return "Dog!!"
    yard = ''.join([char for char in flattened if char == '@'])
    total_capacity = bags*cap
    if (len(yard) > total_capacity):
        return "Cr@p"
    else:
        return "Clean"
