# link : https://www.codewars.com/kata/51fd6bc82bc150b28e0000ce/train/python

def no_odds(values):
    return_values = []
    for val in values:
        if val % 2 == 0:
            return_values.append(val)
    return return_values
    