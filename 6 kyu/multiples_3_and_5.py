# link : https://www.codewars.com/kata/54bb6ee72c4715684d0008f9/train/python

''' original solution
def solution(number):
    total = 0
    for i in range(0, number, 5):
        total += i
    for i in range(0, number, 3):
        if i % 5 != 0:
            total += i
    return total
'''
def solution(number):
    def sum_of_multiples(k):
        p = (number - 1) // k
        return k * p * (p+1) // 2
    return sum_of_multiples(3) + sum_of_multiples(5) - sum_of_multiples(15)




print(solution(10))
print(solution(20))
print(solution(100))
print(solution(200))
print(solution(1000))
print(solution(10000))