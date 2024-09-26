# link :

import math

def sum_average(arr):
    result = 0
    for sub in arr:
        #sum subarray
        total = sum(sub)
        #get subarray length
        length = len(sub)
        #divide sum by length
        average = total/length
        #add sum/length to result
        result += average
    return math.floor(result)
