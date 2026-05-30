# link : https://www.codewars.com/kata/52b757663a95b11b3d00062d/train/python

def to_weird_case(words):
    words_split = words.split()
    new_words = []
    for word in words_split:
        new_word = ""
        for index, letter in enumerate(word):
            if index % 2 == 0:
                new_word += letter.upper()
            else:
                new_word += letter.lower()
        new_words.append(new_word)
    
    return " ".join(new_words)

print(to_weird_case("This")) #ThIs
print(to_weird_case("Is")) #Is
print(to_weird_case("This is a Test")) #ThIs Is A TeSt