# link : https://www.codewars.com/kata/57e1e61ba396b3727c000251/train/python

def string_clean(s):
    cleaned_string = ""
    for char in s:
        if ord(char) >= 48 and ord(char) <= 57:
            # Skip numeric characters (ASCII 48-57)
            pass
        else:
            cleaned_string += char
    return cleaned_string
