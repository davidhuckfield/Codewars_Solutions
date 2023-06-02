// link : https://www.codewars.com/kata/52fba66badcd10859f00097e

function disemvowel(str) {
    let strArray = str.split("");
    let i=0;
    while (i < strArray.length) {
      if (["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"].includes(strArray[i])) {
      strArray.splice(i, 1);
      }
      else {i++;}
    }
    
    return strArray.join("");
  }