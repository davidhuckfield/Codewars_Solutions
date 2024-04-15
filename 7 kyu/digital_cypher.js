// link : https://www.codewars.com/kata/592e830e043b99888600002d

function encode(str,  n) {
  let splitString = str.split("");
  let codeArray = [];
  for (let i=0; i<splitString.length; i++) {
    codeArray.push(splitString[i].charCodeAt(0)-96);
  }
  let codePosition=0;
  for (let i=0; i<codeArray.length; i++) {
    let currentCodeDigit = n.toString().charAt(codePosition);
    codeArray[i]+=(parseInt(currentCodeDigit));
    if (codePosition>=n.toString().length-1) {
        codePosition=0;
    }
    else {codePosition++;}
  }
  return codeArray;
}

// [ 20, 12, 18, 30, 21]
console.log(encode("scout", 1939));