# link : https://www.codewars.com/kata/5701800886306a876a001031/train/python

def lineup_students(st):
    student_list = st.split()
    sorted_students = sorted(student_list, key=lambda s: (len(s), s), reverse = True)
    return sorted_students