# link : https://www.codewars.com/kata/54fb853b2c8785dd5e000957/train/python

def chain(init_val, functions):
    result = init_val
    for function in functions:
        result = function(result)
    return result