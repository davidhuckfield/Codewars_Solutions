# link : https://www.codewars.com/kata/6510238b4840140017234427/train/python

# should work according to instructions but currently failing some tests

# Rules for Nesting:

# List A can be nested inside List B if:
# The minimum value in List A is greater than the minimum value in List B.
# The maximum value in List A is smaller than the maximum value in List B.

def matryoshka(lst):
    print(lst)
    nestable = True
    length = len(lst)
    for i in range(length-1):
        if min(lst[i])<=min(lst[i+1]) or max(lst[i])>=max(lst[i+1]):
            nestable = False
    return nestable
