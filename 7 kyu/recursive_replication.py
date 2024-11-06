# link : https://www.codewars.com/kata/57547f9182655569ab0008c4/train/python

#countcalls decorator part of codewars testing
#@countcalls

def replicate(times, number):
    if times <= 0:
        return []
    else:
        return [number] + replicate(times - 1, number)
    
    #explanation of working:
    #Python concatenates lists when + is used between lists
    #eg [1] + [2] == [1,2]
    #if times is 0 or less, empty list is returned []
    #if eg times is 3 and number is 7, it returns [7] + another run of the function (notated as X)
    #result of first run (times 3) is [7] + X
    #second run (times 2) [7] + [7] + x
    #third run (times 1) [7] + [7] + [7] + x
    #fourth run (times 0) returns [] + [7] + [7] + [7]
    #concatenated to [7,7,7]