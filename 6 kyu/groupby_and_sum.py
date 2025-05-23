# link : https://www.codewars.com/kata/5ed056c9263d2f001738b791/train/python

def group(arr, idx):

    dictionary = {}
    for sublist in arr:
        key = tuple(sublist[i] for i in idx)

        values = [v for i, v in enumerate(sublist) if i not in idx]

        if key not in dictionary:
            dictionary[key] = values[:]
        else:
            dictionary[key] = [a + b for a, b in zip(dictionary[key], values)]

    return dictionary

    