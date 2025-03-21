# link : https://www.codewars.com/kata/54a91a4883a7de5d7800009c/train/python

import re

def increment_string(strng):
    match = re.search(r"(\d+)$", strng)
    if match:
        num = match.group(1)
        new_num = str(int(num) + 1).zfill(len(num))
        return strng[:-len(num)] + new_num
    else:
        return strng + "1"
    
print(increment_string("foo"))
print(increment_string("foobar23"))
print(increment_string("foo0042"))
print(increment_string("bar99"))
print(increment_string("baz000"))
print(increment_string("baz000a"))