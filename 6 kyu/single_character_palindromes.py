# link : https://www.codewars.com/kata/5a2c22271f7f709eaa0005d3/train/python

def solve(s):
    if s == s[::-1]:
        return "OK"
    for i in range(len(s)):
        string_without_current_char = s[:i] + s[i+1:]
        if string_without_current_char == string_without_current_char[::-1]:
            return "remove one"
    return "not possible"



print(solve("abba")) #"OK"
print(solve("abbaa")) #"remove one"
print(solve("abbaab")) #"not possible"
print(solve("thisisalongertextexample"))