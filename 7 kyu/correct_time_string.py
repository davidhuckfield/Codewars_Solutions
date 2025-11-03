# link : https://www.codewars.com/kata/57873ab5e55533a2890000c7/train/python

import re

def time_correct(t):
    if t is None:
        return None #handle None input
    if len(t) == 0:
        return "" #return empty string if input is empty

    if not re.fullmatch(r"\d{2}:\d{2}:\d{2}", t):
        return None #if input is not correct format (HH:MM:SS) return None

    hours, minutes, seconds = map(int, t.split(":")) #assign H/M/S variables

    #handle seconds overflow
    if seconds > 59:
        minutes += seconds // 60
        seconds = seconds % 60

    #handle minutes overflow
    if minutes > 59:
        hours += minutes // 60
        minutes = minutes % 60
    
    #handle hours overflow (extra days not relevant)
    hours = hours % 24

    #pad with leading zeroes
    return f"{hours:02}:{minutes:02}:{seconds:02}"