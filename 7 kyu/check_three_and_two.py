# link : https://www.codewars.com/kata/5a9e86705ee396d6be000091/train/python

def check_three_and_two(array):
    a_count = array.count("a")
    b_count = array.count("b")
    c_count = array.count("c")
    
    if (a_count==3 or b_count==3 or c_count==3):
        if(a_count==2 or b_count==2 or c_count==2):
            return True
        else:
            return False
    else:
        return False