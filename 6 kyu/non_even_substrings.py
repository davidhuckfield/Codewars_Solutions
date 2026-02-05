# link : https://www.codewars.com/kata/59da47fa27ee00a8b90000b4/train/python

def solve(s):
    substrings = [s[i:j] for i in range(len(s)) for j in range(i + 1, len(s) + 1)]
    print(substrings)
    odds = [n for n in substrings if int(n) % 2 !=0]
    odds = [int(n) for n in odds]
    odds = sorted(odds)
    return len(odds)



print(solve("1341")) #7