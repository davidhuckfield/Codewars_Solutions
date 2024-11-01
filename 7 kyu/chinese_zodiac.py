# link : https://www.codewars.com/kata/57a73e697cb1f31dd70000d2/train/python

# from preloaded import animals, elements

animals = ["Rat", "Ox", "Tiger", "Rabbit", "Dragon", "Snake", "Horse", "Goat", "Monkey", "Rooster", "Dog", "Pig"]
elements = ["Wood", "Fire", "Earth", "Metal", "Water"]

#from preloaded import animals, elements

def chinese_zodiac(year):
    years_since_1984 = year - 1984

    #calculating remainder with modulo calculates how many times 12 "fits into" the year difference, because every change of exactly 12 years returns to the original index
    #the remainder is how many positions the index will actually move - as the reference index is 0, this is also the index itself
    animal_index = years_since_1984 % 12
    animal = animals[animal_index]

    #same modulo calculation but floor divide by 2, eg a difference of one year will be no change, a difference of 2 years will result in an index increase of 1
    element_index = (years_since_1984 // 2) % 5
    element = elements[element_index]
    
    return f"{element} {animal}"

print("1965 should be Wood Snake, it's:")
print(chinese_zodiac(1965))
print("1938 should be Earth Tiger, it's:")
print(chinese_zodiac(1938))
print("1965 should be Earth Tiger, it's:")
print(chinese_zodiac(1998))

    
