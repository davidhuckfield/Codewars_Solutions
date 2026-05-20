# link : https://www.codewars.com/kata/5713bc89c82eff33c60009f7/train/python

def to_freud(sentence):
    if len(sentence) == 0:
        return ""
    word_list = sentence.split(" ")
    new_sentence_words = []
    for word in word_list:
        new_sentence_words.append("sex")
    new_sentence = " ".join(new_sentence_words)
    return new_sentence