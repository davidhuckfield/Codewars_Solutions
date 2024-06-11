// link : https://www.codewars.com/kata/57a37f3cbb99449513000cd8

function getNumberFromString(s) {
    let numbers = "";
    let split = s.split("");
    for (let i = 0; i < split.length; i++) {
      if (!isNaN(parseInt(split[i]))) {
        numbers += split[i];
      }
    }
   
    return parseInt(numbers);
  }