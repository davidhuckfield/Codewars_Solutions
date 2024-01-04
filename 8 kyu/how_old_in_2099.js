// link : https://www.codewars.com/kata/5761a717780f8950ce001473

function  calculateAge(birthyear, futureyear) {
    if (futureyear - birthyear === 0) {
      return "You were born this very year!";
    }
    else if (futureyear - birthyear === -1) {
      return "You will be born in 1 year."
    }
    else if (futureyear - birthyear < 0) {
      return "You will be born in " + Math.abs(futureyear - birthyear) + " years.";
    }
    else if (futureyear - birthyear === 1) {
      return "You are 1 year old.";
    }
    else {
      return "You are " + (futureyear - birthyear) + " years old.";
      }
    }