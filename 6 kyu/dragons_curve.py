# link : https://www.codewars.com/kata/53ad7224454985e4e8000eaa/train/python

import re

def dragon(n):
    if type(n) is not int or n < 0:
        return ""
    replacements = {"a":"aRbFR", "b":"LFaLb"}
    text = "Fa"
    
    for i in range(n):
        pattern = re.compile("|".join(map(re.escape, replacements.keys())))
        text = pattern.sub(lambda m: replacements[m.group(0)], text)
    
    text = text.replace("a", "")
    text = text.replace("b", "")
    
    return text