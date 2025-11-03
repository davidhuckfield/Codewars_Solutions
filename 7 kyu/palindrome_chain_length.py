# link : https://www.codewars.com/kata/525f039017c7cd0e1a000a26/train/python

def palindrome_chain_length(n):
    if str(n) == "".join(reversed(str(n))):
        return 0
    counter = 0
    while str(n) != "".join(reversed(str(n))):
        n = n + int("".join(reversed(str(n))))
        counter += 1
    return counter