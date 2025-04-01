# link : https://www.codewars.com/kata/567d609f1c16d7369c000008/train/python

import random

def generate(length):
    binary_string = ""
    for i in range (length):
        char = random.choice(["1", "0"])
        binary_string += char
    print(binary_string)
    return binary_string