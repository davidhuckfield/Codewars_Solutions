# link : https://www.codewars.com/kata/517abf86da9663f1d2000003/train/python

import re
def to_camel_case(text):
    split_text = re.split(r'[_-]', text)
    for i in range(1,len(split_text)):
        split_text[i] = split_text[i].capitalize()
    return_string = "".join(split_text)
    return return_string