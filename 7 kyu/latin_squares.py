# link : https://www.codewars.com/kata/645fb55ecf8c290031b779ef/train/python

def make_latin_square(n):
    print(f"n is {n}")
    #creates an array of size n with _ used as a placeholder, then within that creates arrays of size n, making each value 0
    latin_square = [[0 for i in range(1,n+1)] for _ in range(1,n+1)]
    
    #set start position to 1
    start = 1
    # from 0 to n outer array
    for i in range(n):
        #from 0 to n inner array
        for y in range(n):
            #set value to start + i (to shift the rows) + y (to increase by 1 each time)
            # -1 because it's from 1 to n-1, not 0 to n.
            latin_square[i][y] = ((start + i + y - 1) % n) + 1
    
    return latin_square