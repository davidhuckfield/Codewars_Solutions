# link : https://www.codewars.com/kata/55e6f5e58f7817808e00002e/train/python

def seven(m):
    number = m
    counter = 0 #counts how many steps required to reach number with no more than 2 digits
    while len(str(number)) > 2: #reduce number until it's length 2 or lower
        number_string = str(number) #convert number to string
        last_digit = int(number_string[len(number_string)-1]) #take last digit from number string and convert back to int
        remaining_number = int(number_string[:len(number_string)-1]) #slice number apart from last digit/character and convert back to int
        number = (remaining_number - (last_digit * 2)) #deduct twice the last digit from remaining_number
        counter += 1 #increment counter
    return (number, counter) #return resulting number and how many steps to reach it