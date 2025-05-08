# link : https://www.codewars.com/kata/555eded1ad94b00403000071/train/python

def series_sum(n):
    total = 0
    if n == 0:
        return "0.00"
    print(n)
    current_divisor = 1
    for i in range(1, n+1):
        total += 1 / current_divisor
        current_divisor += 3
    total = "{:.2f}".format(total)
    return total