// link : https://www.codewars.com/kata/525caa5c1bf619d28c000335

function isSolved(board) {
    let result;
    //subfunction to check if every number in a row is 1 or 2
    function rowCheck (array) {
      if (array.every((num) => num===1)) {
        return 1
      }
      else if (array.every((num) => num===2)) {
        return 2
      }
    }
    
    //for loop to check horizontal rows
    for (let i=0; i<3; i++) {
      if (rowCheck(board[i]) === 1) {
        result = 1
      }
      else if (rowCheck(board[i]) === 2) {
        result = 2
      }
    }
    
    //create empty array to push numbers in vertical column to use rowCheck on
    let verticalArray=[];
    
    //start with column 0
    //push 0,1,2
    //board[0][0], board[1][0], board[2][0]
    
    for (let x=0; x<3; x++) {
    for (let i=0; i<3; i++) {
      verticalArray.push(board[i][x])
        }
      if (rowCheck(verticalArray) === 1) {
        result = 1
      }
      else if (rowCheck(verticalArray) === 2) {
        result = 2
      }
      //reset verticalArray back to empty for next loop
      verticalArray = [];
      }
    
    //check diagonals
    
    let diagonalDownwards = [board[0][0], board[1][1], board[2][2]];
    let diagonalUpwards = [board[2][0], board [1][1], board [0][2]];
    
    if (rowCheck(diagonalDownwards) === 1 || rowCheck(diagonalUpwards) === 1) {
      result = 1;
    }
    else if (rowCheck(diagonalDownwards) === 2 || rowCheck(diagonalUpwards) === 2) {
      result = 2
    }
    
    //count how many zeroes to determine if the game is finished
    let zeroCount=0;
    for (let i=0; i<3; i++) {
      for (let y=0; y<3; y++) {
        if (board[i][y] === 0) {
          zeroCount++;
        }
      }
    }
    
    if (result !=1 && result !=2) {
      if (zeroCount === 0) {result = 0}
      else {result = -1}
    }
    
    return result;
    
  }