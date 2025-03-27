# link : https://www.codewars.com/kata/5768a693a3205e1cc100071f/train/python

def initialize_names(name):
    names = name.split()
    print(names)
    for i in range(len(names)):
        if i != 0 and i != len(names)-1:
            names[i] = names[i][0] + "."
            
    return " ".join(names)
