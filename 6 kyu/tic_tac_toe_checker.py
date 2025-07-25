# link : https://www.codewars.com/kata/68582183cf16719a5ba943df/train/python

def is_valid_position(board: tuple[tuple[str, ...], ...]) -> bool:
    def count_chars():
        x_count = sum(row.count('X') for row in board) #count how many Xs on the board
        o_count = sum(row.count('O') for row in board) #count how many Os on the board
        return x_count, o_count
    
    def player_wins(player):
        for i in range(3):
            if all(board[i][j] == player for j in range(3)):
                return True
            if all(board[j][i] == player for j in range(3)):
                return True
        
        if all(board[i][i] == player for i in range(3)):
            return True
        if all(board[i][2-i] == player for i in range(3)):
            return True
        return False
    
    x_count, o_count = count_chars()

    if not (x_count == o_count or x_count == o_count + 1):
        return False
    
    x_wins = player_wins('X')
    o_wins = player_wins('O')

    if x_wins and o_wins:
        return False
    
    if x_wins and x_count != o_count + 1:
        return False
    
    if o_wins and x_count != o_count:
        return False
    
    return True
