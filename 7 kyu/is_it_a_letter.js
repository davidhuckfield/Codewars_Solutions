// link : https://www.codewars.com/kata/57a06b07cf1fa58b2b000252

function isItLetter(character) {
  
    if (
      (character.charCodeAt(0)>=97 && character.charCodeAt(0)<=122)
      ||
      (character.charCodeAt(0)>=65 && character.charCodeAt(0)<=90)
    ) {return true;}
    else {return false;}
    
  
  }