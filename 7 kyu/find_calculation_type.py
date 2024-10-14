# link : https://www.codewars.com/kata/5aca48db188ab3558e0030fa/train/python

def calc_type(a, b, res):
    if (a + b == res):
        return "addition"
    elif (a - b == res):
        return "subtraction"
    elif (a * b == res):
        return "multiplication"
    elif (a / b == res):
        return "division"
    else:
        return "Solution not found"
    
    # alternate solution

def calc_type2(a, b, res):
    # creates a dictionary of key-value pairs where each possible formula is calculated and the result is the key, and the return value is the value
    # uses res as the key to look up, which will match one of the calculated numbers
    # eg a is 1, b is 2, res is 3 - the dictionary will have the keys 3, -1, 2, 0.5.
    return {a + b: "addition", a - b: "subtraction", a * b: "multiplication", a / b: "division"}[res]