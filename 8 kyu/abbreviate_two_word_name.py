# link : https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3/train/python

def abbrev_name(name):
    initials = ""
    names = name.split()
    initials += names[0][0].upper()
    initials += "."
    initials += names[1][0].upper()
    return initials