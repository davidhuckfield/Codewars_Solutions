# link : https://www.codewars.com/kata/56b97b776ffcea598a0006f2/train/python

def bubblesort_once(l):
    new_list=l[:]
    for i in range(len(new_list)):
        if i==len(new_list)-1:
            break
        else:
            a = new_list[i]
            b = new_list[i+1]
            if a>b:
                new_list[i]=b
                new_list[i+1]=a
    return new_list