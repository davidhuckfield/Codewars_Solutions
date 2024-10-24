# link : https://www.codewars.com/kata/57ab2d6072292dbf7c000039/train/python

def correct_polish_letters(st): 
    st = st.replace('ą', 'a')
    st = st.replace('ć', 'c')
    st = st.replace('ę', 'e')
    st = st.replace('ł', 'l')
    st = st.replace('ń', 'n')
    st = st.replace('ó', 'o')
    st = st.replace('ś', 's')
    st = st.replace('ź', 'z')
    st = st.replace('ż', 'z')
    return st