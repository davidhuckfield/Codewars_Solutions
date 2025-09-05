# link : https://www.codewars.com/kata/52e1476c8147a7547a000811/train/python

regex="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z0-9]{6,}$"

from re import compile, VERBOSE

regex = compile("""
^              # begin word
(?=.*?[a-z])   # at least one lowercase letter
(?=.*?[A-Z])   # at least one uppercase letter
(?=.*?[0-9])   # at least one number
[A-Za-z\d]     # only alphanumeric
{6,}           # at least 6 characters long
$              # end word
""", VERBOSE)