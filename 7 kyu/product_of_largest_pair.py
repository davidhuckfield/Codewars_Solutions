# link : https://www.codewars.com/kata/5784c89be5553370e000061b/train/python

def max_product(a):
	highest = max(a)
	a.remove(highest)
	second = max(a)
	return highest * second

print(max_product([2,1,5,0,4,3])) #20