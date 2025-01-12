# link : https://www.codewars.com/kata/5a0178f66f793bc5b0001728/train/python

from collections import Counter

def longest_palindrome(s):
    #filter to only include alphanumeric characters
    #c.lower() converts to lower case
    #for c in s is for character in the s input string
    #if c.isalnum() checks if the character is alphanumeric and only includes it if it is
    #"".join joins all the characters in the for with no separating character.
    filtered_s = "".join(c.lower() for c in s if c.isalnum())

    #find frequency of each character by using imported Counter function - quicker than using for/if and dictionary
    frequency = Counter(filtered_s)

    #initialise palindrome length at 0, we will add length for each pair of characters found
    palindrome_length = 0
    #monitor whether any character has an odd number of appearances, as the remainder 1 can be used as the centre of the palindrome
    odd_found = False

    #for each entry in the counter
    for count in frequency.values():
        #increase palindrome length by the number of characters divided by 2 and floored, then multiplied by 2, essentially removing the remainder
        #this is because any odd remainder characters cannot be used, except for 1 in the middle, which is accounted for later
        palindrome_length += count // 2 * 2
        #if there is an odd remainder of any of the counts, set odd found boolean to True, as only one odd character can be used in the centre
        if count % 2 == 1:
            odd_found = True

    #add 1 to the length for any odd remainder - any additional odd characters will be disregarded by this process
    if odd_found:
        palindrome_length += 1

    return palindrome_length