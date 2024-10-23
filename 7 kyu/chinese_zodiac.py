# link : https://www.codewars.com/kata/57a73e697cb1f31dd70000d2/train/python

# from preloaded import animals, elements

animals = ["Rat", "Ox", "Tiger", "Rabbit", "Dragon", "Snake", "Horse", "Goat", "Monkey", "Rooster", "Dog", "Pig"]
elements = ["Wood", "Fire", "Earth", "Metal", "Water"]

def chinese_zodiac(year):
    print(year)
    # print(animals)
    # print(elements)
    ref_year = 1984
    ref_animal = "Rat"
    ref_element = "Wood"
    
    animal_cycle_length = len(animals)
    element_cycle_length = len(elements)
    
    ref_index_animal = animals.index(ref_animal)
    ref_index_element = elements.index(ref_element)
    
    year_difference = year - ref_year
    
    animal_index = (ref_index_animal + year_difference) % animal_cycle_length
    animal_index = animal_index if animal_index >=0 else animal_index + animal_cycle_length
    target_animal = animals[animal_index]
    
    element_index = (ref_index_element + year_difference) % element_cycle_length
    element_index = element_index if element_index >=0 else element_index + element_cycle_length
    target_element = elements[element_index]
    
    return_text = target_element + " " + target_animal
    return return_text

print("1965 should be Wood Snake, it's:")
print(chinese_zodiac(1965))
print("1938 should be Earth Tiger, it's:")
print(chinese_zodiac(1938))
print("1965 should be Earth Tiger, it's:")
print(chinese_zodiac(1998))

    
