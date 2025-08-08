# link : https://www.codewars.com/kata/55563df50dda59adf900004d/train/python

def validate_ean(code):
    if len(code) != 13:
        return False
    sum = 0
    for i in range(len(code)-1):
        if i%2 == 0:
            sum += int(code[i])
        else:
            sum += (int(code[i])*3)
    print(sum)
    if sum % 10 == 0:
        checksum = 0
    else:
        checksum = (10 - (sum % 10))
    print(checksum)
    if checksum == int(code[12]):
        return True
    else:
        return False

print(validate_ean("9783815820865")) #True
print(validate_ean("9783815820864")) #False
print(validate_ean("9783827317100")) #True