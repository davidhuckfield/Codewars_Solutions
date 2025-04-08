# link : http://codewars.com/kata/51f1342c76b586046800002a/train/python

import math #need math import to use floor

def solution(n):
    #multiply by 2 to shift the scale 
    #add 0.5 before flooring to force tie-breaks upwards
    #floor the result
    #divide by 2 to shift the scale back
    return math.floor(n * 2 + 0.5) / 2