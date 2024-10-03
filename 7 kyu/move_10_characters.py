# link : https://www.codewars.com/kata/57cf50a7eca2603de0000090/train/python

def move_ten(st):
    print(st)
    moved_string = ""
    for i in range(len(st)):
        print("***LOOP STEP***")
        code = ord(st[i])
        print(f"code is {code}")
        new_code = code + 10
        print(f"new_code is {new_code}")
        if (new_code > 122):
            new_code = 97 + (new_code - 123)
            print(f"too big - new_code is now {new_code}")
        new_letter = chr(new_code)
        print(f"new_letter is {new_letter}")
        moved_string += new_letter
        print(f"letter added - moved_string is now {moved_string}")
    return moved_string
