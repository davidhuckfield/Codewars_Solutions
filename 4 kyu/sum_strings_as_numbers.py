# link : https://www.codewars.com/kata/5324945e2ece5e1f32000370/train/python

def sum_strings(x="0", y="0"): #set default inputs in case of missing input
    result = [] #list to store results of individual sums
    carry = 0 #variable to store carried amount from individual digit sums

    if x == "" and y == "" or x == "0" and y == "0": #error handling - if both inputs blank or 0, return 0
        return "0"
    
    max_length = max(len(x), len(y)) #pad the numbers to the same length with leading zeroes if they're different lengths
    x = x.zfill(max_length)
    y = y.zfill(max_length)

    for i in range(max_length-1, -1, -1):
        digit_sum = int(x[i]) + int(y[i]) + carry #add digits at current position plus carryover, if any
        carry = digit_sum // 10 #calculate if any carrover to next digit
        result.append(str(digit_sum % 10)) #append the result

    if carry:
        result.append(str(carry)) #at the end of the calculations, if any carryover remains, add it

    joined_result ="".join(result[::-1]).lstrip("0") or "0" #join the result list into a string, use lstrip to remove leading zeroes, and if the result was 0, return this otherwise lstrip will make it an empty string
    return joined_result


print(sum_strings("123","456"))
print(sum_strings("11111111111","4"))