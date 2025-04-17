# link : https://www.codewars.com/kata/5a1ebc2480171f29cf0000e5/train/python

import math #import math module to use pi for circle area calculation
def sort_by_area(seq): 
    areas_with_dimensions = [] #create list to store areas and dimensions as tuples
    for dimensions in seq:
        if isinstance(dimensions, tuple): #if tuple, calculate rectangle area
            area = dimensions[0] * dimensions[1]
            areas_with_dimensions.append((dimensions, area)) #store original dimensions and area
        else: #if not tuple, must be single dimension eg calculate circle area from radius
            area = math.pi * dimensions ** 2 #calculate circle radius
            areas_with_dimensions.append((dimensions,area)) #store original dimension and area

    areas_with_dimensions.sort(key = lambda x: x[1]) #sort by each item [1] which is area
    sorted_by_area = [item[0] for item in areas_with_dimensions] #extract the original dimensions only (item 0)
    return sorted_by_area