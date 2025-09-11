# link : https://www.codewars.com/kata/553a2461098c64ae53000041/train/python

def wordify(n):
    if n == 0: 
        return "zero"
    ones = {
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine"
    }

    tens = {
    10: "ten",
    20: "twenty",
    30: "thirty",
    40: "forty",
    50: "fifty",
    60: "sixty",
    70: "seventy",
    80: "eighty",
    90: "ninety"
    }

    teens = {
    11:"eleven",
    12:"twelve",
    13:"thirteen",
    14:"fourteen",
    15:"fifteen",
    16:"sixteen",
    17:"seventeen",
    18:"eighteen",
    19:"nineteen"
    }
    hundreds = {k * 100: v + " hundred" for k, v in ones.items()}

    remainder = n
    words_list = []

    for value in sorted(hundreds.keys(), reverse = True):
        if remainder >= value:
            words_list.append(hundreds[value])
            remainder -= value
            break
    
    if 11 <= remainder <= 19:
        words_list.append(teens[remainder])
        remainder = 0

    for value in sorted(tens.keys(), reverse = True):
        if remainder >= value:
            words_list.append(tens[value])
            remainder -= value
            break

    for value in sorted(ones.keys(), reverse = True):
        if remainder >= value:
            words_list.append(ones[value])
            remainder -= value
            break
    
    return " ".join(words_list)


print(wordify(1))
print(wordify(10))
print(wordify(25))
print(wordify(103))
print(wordify(347))
print(wordify(999))
