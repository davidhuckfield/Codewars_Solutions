# link : https://www.codewars.com/kata/598d91785d4ce3ec4f000018/train/python

def name_value(my_list):
    print(f"my_list is {my_list}")
    values_list = []
    print(f"values_list is {values_list}")
    for index, string in enumerate(my_list):
        value_total = 0
        print(f"value_total starts at {value_total}")
        print(f"Current string is {string}")
        print(f"current index is {index}")
        split_string = [c for c in string if c!=" "]
        print(f"Current split_string is {split_string}")
        for char in split_string:
            print(f"Current char is {char}")
            value = ord(char)-96
            print(f"current value is {value}")
            value_total += value
        values_list.append(value_total*(index+1))
    print(f"values_list is {values_list}")
    return values_list

name_value(["abc", "abc abc"])
name_value(["codewars", "abc", "xyz"])