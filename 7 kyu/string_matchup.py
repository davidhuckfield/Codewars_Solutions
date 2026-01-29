# link : https://www.codewars.com/kata/59ca8e8e1a68b7de740001f4/train/python

def solve(a,b):
    return_list = []
    for b_string in b:
        count = 0
        for a_string in a:
            if a_string == b_string:
                count += 1
        return_list.append(count)
    return return_list

print(solve(["abc", "abc", "xyz", "cde", "uvw"], ["abc", "cde", "uap"]))