# link : https://www.codewars.com/kata/618647c4d01859002768bc15/train/python

def guess_colour(guesses, hats):
    
    red_count = hats.count("Red")
    
    if len(guesses) == 0:
        if red_count % 2 == 0:
            return "Blue"
        else:
            return "Red"
    
    else:
        first_guess = guesses[0]
        if first_guess == "Red":
            expected_parity = 1
        else:
            expected_parity = 0
            
        known_reds = hats.count("Red")
        for guess in guesses[1:]:
            if guess == "Red":
                known_reds += 1
                
        if known_reds % 2 == expected_parity:
            return "Blue"
        else:
            return "Red"