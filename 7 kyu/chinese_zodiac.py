# link : https://www.codewars.com/kata/57a73e697cb1f31dd70000d2/train/python

from preloaded import animals, elements

def chinese_zodiac(year):
    print(year) #1965
    print(animals)
    print(elements)
    ref_year = 1998
    ref_animal = "Tiger"
    ref_element = "Earth"
    
    animal_cycle_length = len(animals) #12
    element_cycle_length = len(elements) #5
    
    ref_index_animal = animals.index(ref_animal) #2
    ref_index_element = elements.index(ref_element) #2
    
    year_difference = year - ref_year #-33
    
    animal_index = (ref_index_animal + year_difference) % animal_cycle_length #-7
    animal_index = animal_index if animal_index >=0 else animal_index + animal_cycle_length #5
    target_animal = animals[animal_index] #Snake
    
    element_index = (ref_index_element + year_difference) % element_cycle_length #-1
    element_index = element_index if element_index >=0 else element_index + element_cycle_length #4
    target_element = elements[element_index] #Water
    
    return_text = target_element + " " + target_animal
    return return_text

    
