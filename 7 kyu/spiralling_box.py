# link : https://www.codewars.com/kata/63b84f54693cb10065687ae5/train/python

def create_box(m, n):  ## m and n positive integers
    print(f"m (width) is {m}")
    print(f"n (height) is {n}")
    matrix = [[0 for i in range(m)] for i in range(n)] 

    # define current "layer" or depth into the spiral/2d array
    # // returns half of max size rounded down
    for layer in range((min(m, n) + 1) // 2):

        # value to change each number to, same as current layer, +1 because of zero index
        value = layer + 1

        # go left to right on top row
        for col in range(layer, m - layer):
            matrix[layer][col] = value
          
        # go left to right on bottom row
        for col in range(layer, m - layer):
            matrix[n - layer - 1][col] = value
          
        # go top to bottom on left column
        for row in range(layer, n - layer):
            matrix[row][layer] = value

        # go top to bottom on right column
        for row in range(layer, n - layer):
            matrix[row][m - layer - 1] = value
          
    # optional - print result for testing
    for row in matrix:
        print(row)
      
    return matrix
