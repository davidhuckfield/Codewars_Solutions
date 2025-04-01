# link : https://www.codewars.com/kata/55b95c76e08bd5eef100001e/train/python

def count_arara(n):
    count_string = n // 2 * "adak "
    if n % 2 != 0:
        count_string += "anane"
    return count_string.strip()