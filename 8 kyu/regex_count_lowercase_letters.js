// link : https://www.codewars.com/kata/56a946cd7bd95ccab2000055

function lowercaseCount(str){
    const lowerCaseLetters = str.match(/[a-z]/g);
    if (lowerCaseLetters === null) {return 0}
    else {return lowerCaseLetters.length;}
    
  }