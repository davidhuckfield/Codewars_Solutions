// link : https://www.codewars.com/kata/5839edaa6754d6fec10000a2

function findMissingLetter(array) {
    let upperCase;
    if (array[0] === array[0].toUpperCase()) {upperCase = true;}
    else {upperCase = false;}
    let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    //['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    let firstLetterIndex = alphabet.indexOf(array[0].toLowerCase());
    //14
    let missingLetter = "";
    //firstLetterIndex is 14
    for (let i=1; i<array.length; i++) {
      if (array[i].toLowerCase() !== alphabet[firstLetterIndex+i]) {
        missingLetter = alphabet[firstLetterIndex+i];
        break;
      }
    }
    if (upperCase) {return missingLetter.toUpperCase();}
    else {return missingLetter.toLowerCase();}
    
  }