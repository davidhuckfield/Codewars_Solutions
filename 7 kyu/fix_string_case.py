# link : https://www.codewars.com/kata/5b180e9fedaa564a7000009a/train/python

def solve(s):
    lower_count = sum(1 for char in s if char.islower())
    upper_count = sum(1 for char in s if char.isupper())
    if upper_count > lower_count:
        return s.upper()
    else:
        return s.lower()