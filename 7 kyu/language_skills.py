# link : https://www.codewars.com/kata/5b16490986b6d336c900007d/train/python

def my_languages(results):
    return_list = []
    for key, value in results.items():
        if value >= 60:
            return_list.append(key)
    return_list.sort(key = lambda x: results[x], reverse=True)
    return return_list
    