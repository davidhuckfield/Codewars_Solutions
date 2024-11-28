# link : https://www.codewars.com/kata/59a96d71dbe3b06c0200009c/train/python

def generate_shape(n):
    shape = ""
    for i in range(n-1):
        row = "+"*n+"\n"
        shape += row
    shape += "+"*n
    return shape
