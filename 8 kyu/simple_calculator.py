# link : https://www.codewars.com/kata/5810085c533d69f4980001cf/train/python

def calculator(x, y, op):
    if type(x) != int or type (y) != int:
        return "unknown value"
    if op == "+":
        return x + y
    elif op == "-":
        return x - y
    elif op == "*":
        return x * y
    elif op == "/":
        return x / y
    else:
        return "unknown value"