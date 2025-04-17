# link : https://www.codewars.com/kata/543e926d38603441590021dd/train/python

import itertools
def get_words(hash_of_letters):
    letters_list = []
    for key, letters in hash_of_letters.items():
        for letter in letters:
            letters_list.extend([letter] * key)
    combinations = list(itertools.permutations(letters_list))
    combinations_strings = ["".join(combination) for combination in combinations]
    combinations_strings = list(set(combinations_strings))
    combinations_strings.sort()
    return combinations_strings