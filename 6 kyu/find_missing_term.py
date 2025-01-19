# link : https://www.codewars.com/kata/52de553ebb55d1fca3000371/train/python

from collections import Counter

def find_missing(sequence):
    print(f"Initial sequence is {sequence}")
    diff_dict = {}
    for i in range(1, len(sequence)):
        print(f"Current number is {sequence[i]}, this differs by {sequence[i]-sequence[i-1]} from previous number")
        diff_dict[i] = sequence[i] - sequence[i-1]
    
    print(diff_dict)
    value_counts = Counter(diff_dict.values())
    most_common_diff = value_counts.most_common(1)[0][0]
    print(f"Most common difference is {most_common_diff}")

    different_value = [value for value, count in value_counts.items() if count == 1]
    different_key = [key for key, value in diff_dict.items() if value == different_value[0]]
    print(f"Different key is {different_key}")

    missing_number = sequence[different_key[0] - 1] + most_common_diff

    print(f"Missing number is {missing_number}")
    return missing_number
    

    

find_missing([1, 2, 3, 4, 6, 7, 8, 9])
find_missing([1, 3, 4, 5, 6, 7, 8, 9])