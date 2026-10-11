# link : https://www.codewars.com/kata/5a49f074b3bfa89b4c00002b/train/python

def has_subpattern(strng):
    double_string = strng + strng
    double_string = double_string[1:len(double_string)-1]
    if strng in double_string:
        return True
    else:
        return False

print(has_subpattern("a")) #False
print(has_subpattern("aaaa")) #True
print(has_subpattern("abcd")) #False
print(has_subpattern("ababab")) #True