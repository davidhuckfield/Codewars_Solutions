// link : https://www.codewars.com/kata/596343a24489a8b2a00000a2

function isItANum(str) {
    let splitString = str.split("");
  
    splitString = splitString.filter(function (character) {
      return !isNaN(+character) && isFinite(character) && character !==" ";
    });
  
    if (splitString.length === 11 && splitString[0] === "0") {
      return splitString.join("");
    }
    else {
      return "Not a phone number";
    }
  }