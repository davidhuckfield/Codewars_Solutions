# link : https://www.codewars.com/kata/5983cba828b2f1fd55000114/train/python

def odd_one(arr):
    odd_index=-1
    length=len(arr)
    for i in range(length):
        if arr[i]%2!=0:
            odd_index=i
            
    return odd_index