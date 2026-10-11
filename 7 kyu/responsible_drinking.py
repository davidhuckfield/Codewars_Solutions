# link : https://www.codewars.com/kata/5aee86c5783bb432cd000018/train/python

import re

def hydrate(drink_string): 
    numbers = re.findall(r'\d+', drink_string)
    numbers = [int(number) for number in numbers]

    total = sum(numbers)

    return_string = f"{total} glass{'es' if total > 1 else ''} of water"

    return return_string

print(hydrate("1 beer")) # "1 glass of water"
print(hydrate("1 shot, 5 beers, 2 shots, 1 glass of wine, 1 beer")) #"10 glasses of water"