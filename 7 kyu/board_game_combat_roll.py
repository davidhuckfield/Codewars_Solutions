# link : https://www.codewars.com/kata/541837036d821665ee0006c2/train/python

def get_required(player, enemy):
    print("**********")
    print(f"player stats are {player}")
    print(f"enemy stats are {enemy}")
    player_score = player[0] + player[1]
    enemy_score = enemy[0] + enemy[1]
    print(f"player, enemy score are {player_score}, {enemy_score}")
    win_rolls = [] #create list to store possible winning rolls
    
    if player_score - enemy_score >= 6: #if player_score is 6 or more higher than enemy_score, player must win
        print("Auto-win")
        return "Auto-win"
    elif enemy_score - player_score >=6: #if enemy_score is 6 or more higher than player_score, enemy must win
        print("Auto-lose")
        return "Auto-lose"
    elif player_score == enemy_score: #if both scores are equal, result is random / dependent on dice rolls
        print("Random")
        return "Random"
    elif player_score > enemy_score: #if player_score is higher than enemy_score, generate list of winning rolls
        for i in range(1,7):
            print(f"Dice roll is {i}")
            if player_score + i > (enemy_score + 6):
                win_rolls.append(i)
    elif enemy_score > player_score:
        for i in range(1,7):
            print(f"Dice roll is {i}")
            if enemy_score + i < (player_score + 6):
                win_rolls.append(i)
            
    print(win_rolls)
    if len(win_rolls) < 1:
        return "Pray for a tie!"
    else:
        return (f"{win_rolls[0]}..{win_rolls[len(win_rolls)-1]}")

print(get_required([9, 1], [2, 0])) #win
print(get_required([1, 0], [7, 1])) #lose
print(get_required([5, 0], [4, 1])) #random
print(get_required([7, 0], [8, 1])) #1..3
print(get_required([7, 2], [6, 8])) #pray for a tie!