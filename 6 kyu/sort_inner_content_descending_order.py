# link : https://www.codewars.com/kata/5898b4b71d298e51b600014b/train/python

def sort_the_inner_content(words):
    words_list = words.split()
    new_words_list = []
    for word in words_list:
        if len(word) == 1:
            new_words_list.append(word)
            continue
        first = word[0]
        last = word[len(word)-1]
        inner = word[1:len(word)-1]
        inner_list = list(inner)
        inner_list.sort(reverse = True)
        inner = "".join(inner_list)
        word = first + inner + last
        new_words_list.append(word)
    return_string = " ".join(new_words_list)
    return return_string