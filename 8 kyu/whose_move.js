//link : https://www.codewars.com/kata/59126992f9f87fd31600009b

function whoseMove(lastPlayer, win) {
    if (lastPlayer === "black") {
      if (win) {return "black";}
      else {return "white";}
    }
    else {
      if (win) {return "white";}
      else {return "black";}
    }
    
    
  }