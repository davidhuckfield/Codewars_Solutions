# link : https://www.codewars.com/kata/580777ee2e14accd9f000165/train/python

def skiponacci(n):
    numbers = [1,1]
    if n == 1:
        return "1"
    while len(numbers) < n:
        numbers.append(numbers[-1]+numbers[-2])
            
    for index, number in enumerate(numbers):
        if index % 2 != 0:
            numbers[index] = "skip"
        else:
            numbers[index] = str(numbers[index])
    numbers = " ".join(numbers)
    
    return numbers