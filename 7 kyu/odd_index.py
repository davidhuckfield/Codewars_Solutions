# link : 

def odd_one(arr):
    odd_index=-1
    length=len(arr)
    for i in range(length):
        if arr[i]%2!=0:
            odd_index=i
            
    return odd_index