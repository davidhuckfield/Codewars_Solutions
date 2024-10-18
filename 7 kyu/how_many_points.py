# link : https://www.codewars.com/kata/580559b17ab3396c58000abb/train/python

import re

def get_los_angeles_points(results):
    total_score = 0
    for team in results:
        if re.search(r'^Los Angeles [A-Z][a-z]+$', team[0]):
            print(f"PASS:{team[0]}")
            points_scored = team[1].split(":")[0]
            points_int = int(points_scored)
            total_score += points_int
        else:
            print(f"FAIL:{team[0]}")
    return total_score
            
