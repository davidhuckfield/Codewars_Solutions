# link : https://www.codewars.com/kata/5c8bf3ec5048ca2c8e954bf3/train/python

def shortest_to_char(s, c):
    if c not in s or not c or len(c) == 0:
        return []
    distances = []
    print(list)
    def shortest_left(string, char):
        if char not in string:
            return None
        counter = 0
        for i in range(len(string)-1, -1, -1):
            if string[i] == char:
                break
            else:
                counter += 1
        return counter
    
    def shortest_right(string, char):
        if char not in string:
            return None
        counter = 0
        for i in range(len(string)):
            if string[i] == char:
                break
            else:
                counter += 1
        return counter
    
    for i in range(len(s)):
        current_left_string = s[:i+1]
        current_right_string = s[i:]
    
        print(f"left string is {current_left_string}")
        print(f"right string is {current_right_string}")

        print(f"steps to char in left string is {shortest_left(current_left_string, c)}")
        print(f"steps to char in right string is {shortest_right(current_right_string, c)}")

        left_distance = shortest_left(current_left_string,c)
        right_distance = shortest_right(current_right_string, c)

        distances.append(left_distance if right_distance is None else right_distance if left_distance is None else min(left_distance, right_distance))

    return distances

print(shortest_to_char("lovecodewars", "e"))