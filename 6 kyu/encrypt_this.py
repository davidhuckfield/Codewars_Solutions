# link : https://www.codewars.com/kata/5848565e273af816fb000449/train/python

def encrypt_this(text):
    #print(text)
    return_text = []
    split_text = text.split()
    for word in split_text:
        if len(word) == 1:
            return_text.append(str(ord(word)))
        elif len(word) == 2:
            return_text.append(str(ord(word[0])) + word[1])
        else:
            first_letter = word[0]
            code = ord(first_letter)
            second_letter = word[1]
            last_letter = word[len(word)-1]
            encrypted_word = ""
            encrypted_word += str(code)
            encrypted_word += last_letter
            for i in range (2,len(word)-1):
                encrypted_word += word[i]
            encrypted_word += second_letter
            return_text.append(encrypted_word)
    return " ".join(return_text)

print(encrypt_this("Hello")) #72olle
print(encrypt_this("good")) #103doo
print(encrypt_this("hello world")) #104olle 119drlo
