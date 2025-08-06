# link : https://www.codewars.com/kata/541103f0a0e736c8e40011d5/train/python

def off(n):
    switches = [0 for _ in range(n)]
    #print(switches)
    for x in range(1, n+1):
        #print(f"x is {x}")
        for y in range(x-1, n, x):
            #print(f"y is {y}")
            switches[y] = 1 - switches[y]
        #print(switches)
    indices = []
    for i in range(n):
        if switches[i] == 1:
            indices.append(i+1)
    return indices

print(off(1))
print(off(2))
print(off(4))
print(off(9))
print(off(12))