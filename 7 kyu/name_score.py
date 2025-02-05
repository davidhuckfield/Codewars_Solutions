# link : https://www.codewars.com/kata/576a29ab726f4bba4b000bb1/train/python

from preloaded import alpha

def name_score(name):
    name_split = list(name)
    score = 0
    letter_scores = {letter: score for group, score in alpha.items() for letter in group}
    for char in name_split:
        char = char.upper()
        if char != " " and char != "Z":
            score += letter_scores[char]
    return {name:score}