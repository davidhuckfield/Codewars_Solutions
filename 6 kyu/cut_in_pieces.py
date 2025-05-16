# link : https://www.codewars.com/kata/55fbb7063097cf0b6b000032/train/python

def part_const(n, k, num):
    def partitions(n, k, max_val=None):
        if max_val is None:
            max_val = n
        
        if k == 1:
            if 1 <= n <= max_val and n != num:
                return 1
            else:
                return 0
            
        total = 0    
        
        for i in range(1, min(n, max_val) + 1):
            if i == num:
                continue
            total += partitions(n - i, k - 1, i)
        return total
    
    return partitions(n, k)

print(part_const(10, 3, 2))
print(part_const(10, 3, 0))
print(part_const(10, 4, 1))
print(part_const(10, 5, 3))