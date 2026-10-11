# link : https://www.codewars.com/kata/570f6436b29c708a32000826/train/python

def first_non_repeated(s):
    for char in s:
        count = s.count(char)
        if count == 1:
            return char
    return None

print(first_non_repeated("test")) #e
print(first_non_repeated("teeter")) #r