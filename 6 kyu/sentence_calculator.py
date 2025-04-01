# link : https://www.codewars.com/kata/5970fce80ed776b94000008b/train/python

def letters_to_numbers(s):
    print(ord("a")) #97
    print(ord("A")) #65
    print(ord("Z")) #90
    for i in range (91, 97):
        print(chr(i))
    
    score = 0
    characters = list(s)
    print(characters)
    
    for character in characters:
        if character.isalpha():
            score += 1
    