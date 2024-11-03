# link : https://www.codewars.com/kata/553e8b195b853c6db4000048/train/python

def has_unique_chars(string):
    for i in range (len(string)):
        if string.count(string[i])>1:
            return False
    return True