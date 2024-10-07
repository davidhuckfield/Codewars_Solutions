# link : https://www.codewars.com/kata/5a29a0898f27f2d9c9000058/train/python

def solve(s):
    uppercase=0
    lowercase=0
    numbers=0
    special=0
    
    for char in s:
        print(type(char))
        if char.isdigit():
            numbers+=1
        elif char.isalpha():
            if char.isupper():
                uppercase += 1
            else:
                lowercase += 1
        else:
            special += 1
    
    return [uppercase, lowercase, numbers, special]