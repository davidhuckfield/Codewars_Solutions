# link : https://www.codewars.com/kata/51b62bf6a9c58071c600001b/train/python

def solution(n):
    roman_numerals = {
    'M':1000,
    'CM':900,
    'D':500,
    'CD':400,
    'C':100,
    'XC':90,
    'L':50,
    'XL':40,
    'X':10,
    'IX':9,
    'V':5,
    'IV':4,
    'I':1
}
    if n == 0:
        return ""
    return_string = ""
    for key,value in roman_numerals.items():
        while n >= value:
            return_string+=key
            n-=value
    
    
    return return_string

