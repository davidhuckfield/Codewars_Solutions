// link : https://www.codewars.com/kata/57d29ccda56edb4187000052

function rpsls(pl1,pl2){
    let beats = {
      rock:["lizard", "scissors"],
      paper:["rock", "spock"],
      scissors:["paper", "lizard"],
      lizard:["spock", "paper"],
      spock:["scissors", "rock"]
    }
    
    if (pl1===pl2) {return "Draw!"}
    return beats[pl1].includes(pl2) ? "Player 1 Won!" : "Player 2 Won!";
  
  }
