# link : https://www.codewars.com/kata/59c3e819d751df54e9000098/train/python

def get_consective_items(items, key): 
    counter = 0
    max_counter = 0
    items = list(str(items))
    key = str(key)
    for item in items:
        if item == key:
            counter += 1
        else:
            max_counter = max(max_counter, counter)
            counter = 0
    max_counter = max(max_counter, counter)
    
    return max_counter

print(get_consective_items(90000, 0)) #4
print(get_consective_items('ascasdaiiiasdacasdiiiiicasdasdiiiiiiiiiiisdasdasdiii', 'i')) #11