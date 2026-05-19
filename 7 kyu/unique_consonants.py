# link : https://www.codewars.com/kata/5a19226646d843de9000007d/train/python

def count_consonants(text):
    #split text into list (also removes duplicates?)
    text_list = list(set(text.lower()))
    vowels = ["a", "e", "i", "o", "u"]
    print(text_list)
    #filter out vowels
    filtered_list = [char for char in text_list if char.isalpha() and char not in vowels ]
    print(filtered_list)
    print(len(filtered_list))
    return len(filtered_list)

count_consonants("sillystring")
count_consonants("aeiou")
count_consonants("Mom")