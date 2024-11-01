# link : https://www.codewars.com/kata/671bd5419ea261fbb8d0a0ca/train/python

import math

def decipher(code):
    for i in range(len(code)):
        print(f"code {i} is {code[i]}")
    return_string = ""
    for i in range(len(code[0])):
        print(f"*** outer loop at index {i} ***")
        print("          ")
        sum = 0
        for y in range(len(code)):
            print(f"i index is {i} and y index is {y}")
            print(f"character is {code[y][i]}")
            print(f"code is {ord(code[y][i])-96}")
            if (code[y][i]) != " ":
                sum+=max(ord(code[y][i])-96, 0)
                print(f"sum is now {sum}")
        average = math.floor(sum/len(code))
        print(f"average is {average}")
        if average == 0:
            character = " "
        else:
            character = chr(average+96)
        print(f"avg character is {character}")
        return_string+=character
        print(f"return_string is now {return_string}")
        print("          ")
        print(f"*** outer loop iterated ***")
    return return_string
