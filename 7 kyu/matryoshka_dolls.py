# link : https://www.codewars.com/kata/6510238b4840140017234427/train/python

# should work according to instructions but currently failing some tests

def matryoshka(lst):
    print(lst)
    nestable = True
    length = len(lst)
    for i in range(length-1):
        if min(lst[i])<=min(lst[i+1]) or max(lst[i])>=max(lst[i+1]):
            nestable = False
    return nestable
