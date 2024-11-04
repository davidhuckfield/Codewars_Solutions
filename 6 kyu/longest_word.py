# link : https://www.codewars.com/kata/57a4c85de298a795210002da/train/python

from collections import Counter

def longest_word(letters):
    #if empty input, return None
    if len(letters)==0:
        return None
    
    #creates a Counter object for all the letters in the input - eg "abc" creates {a:1, b:1, c:1}
    input_count = Counter(letters)
    #filter valid words - if the Counter of the word, minus the counter for the input, has no remaining entries, the word is not valid
    valid_words = [word for word in words if not (Counter(word) - input_count)]

    #if there are no valid words (length of valid words list is 0) return None
    if len(valid_words)==0:
        return None
    
    #use max with key len, to find the longest word, then use len to find the length of that
    max_word_length = len(max(valid_words,key=len))

    #filter valid words, keep if each word length is same as max word length
    valid_words = [word for word in valid_words if len(word) == max_word_length]

    #sort - default alphabetically
    valid_words.sort()
    return valid_words