// link : https://www.codewars.com/kata/598f76a44f613e0e0b000026

function sumOfIntegersInString(s){
    let splitString = s.split("");
    let currentNumberString = "";
    let sum = 0;
    for (let i=0; i<splitString.length; i++) {
  
      if (isNaN(splitString[i])) {
        if (currentNumberString!=="") {
             sum += (parseInt(currentNumberString));}
            currentNumberString = "";
        
      }
      else {
        if (splitString[i]!==" ") {
            currentNumberString += splitString[i];}
  
      }
      if (i===splitString.length-1 && currentNumberString !=="") {
        sum += (parseInt(currentNumberString));
      }
    }
    return sum;
  }