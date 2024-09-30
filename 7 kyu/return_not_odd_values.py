# link : https://www.codewars.com/kata/51fd6bc82bc150b28e0000ce/train/python

def no_odds(values):
    return_values = []
    for val in values:
        if val % 2 == 0:
            return_values.append(val)
    return return_values
    
# alternate solution

# returns the values array with only those entries that meet the condition in the loop

def no_odds2(values):
    return [i for i in values if i % 2 == 0]