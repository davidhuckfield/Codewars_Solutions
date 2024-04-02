// link : https://www.codewars.com/kata/59c8b38423dacc7d95000008/train/javascript

function isValid(formula){

    let isValid=true;
    if (!formula.includes(7) && !formula.includes(8) ) {
      isValid=false;
  
    }
    if (formula.includes(1) && formula.includes(2)) {
      isValid=false;
  
    }
    if (formula.includes(3) && formula.includes(4)) {
      isValid=false;
   
    }
    if (formula.includes(5)) {
      if (!formula.includes(6)) {
      isValid=false;
      }
    }
    if (formula.includes(6)) {
      if (!formula.includes(5)) {
        isValid=false;
      }
    }
    
    return isValid;
  }