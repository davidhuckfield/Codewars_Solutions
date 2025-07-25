# link : https://www.codewars.com/kata/55e6f5e58f7817808e00002e/train/python

def seven(m):
    number = m
    counter = 0
    while len(str(number)) > 2:
        number_string = str(number)
        last_digit = int(number_string[len(number_string)-1])
        remaining_number = int(number_string[:len(number_string)-1])
        number = (remaining_number - (last_digit * 2))
        counter += 1
    return (number, counter)