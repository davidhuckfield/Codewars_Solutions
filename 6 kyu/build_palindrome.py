# link : https://www.codewars.com/kata/58942f9175f2c78f4b000108/train/python
#using slicing to reverse parts of strings - st[::-1] returns a new string which is from start to finish of the existing string, but step -1 makes it go backwards

def build_palindrome(st):
    if st == st[::-1]: #if string is already a palindrome, return the input
        return st
    for i in range(len(st)): #find the shortest part of the existing string which is already a palindrome
        if st[i:] == st[i:][::-1]:
            return st + st[:i][::-1] #when found, return input string + string from beginning to position where palindrome found, then sliced again backwards.
    return ""

#eg "abcde"
#"abcde" not equal to "edcba" (backwards)
#for in in range(len(st)) which is 5:
#i 1 - st[1:] is "bcde" - st[1:][::-1] is "edcb" - not equal
#i 2 - st[1:] is "cde" - st[1:][::-1] is "edc" - not equal
#i 3 - st[1:] is "de" - st[1:][::-1] is "ed" - not equal
#i 4 - st[1:] is "e" - st[1:][::-1] is "e" - equal
# return st ("abcde") + st[:4] ("abcd") [::-1] ("dcba") - output is "abcdedcba"

#eg "ababab"
#"ababab" not equal to "bababa"
#for in in range(len(st) which is 6:
#i 1 - st[1:] is "babab" - st[1:][::-1] is "babab" - EQUAL
#return st("ababab") + st[:1] (a) [::-1] (a) - output is "abababa"