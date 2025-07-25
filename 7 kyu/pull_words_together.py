# link : https://www.codewars.com/kata/59ad7d2e07157af687000070/train/python

def sentencify(words):
    if words[0].upper() != words[0]:
        words[0] = words[0].capitalize()
    words = " ".join(words)
    words = words + "."
    
    return words