// link : https://www.codewars.com/kata/56b1f01c247c01db92000076

function doubleChar(str) {
    let array = str.split("");
    let newArray = [];
    for (let i=0; i<array.length; i++) {
      newArray.push(array[i]);
      newArray.push(array[i]);
    }
    return newArray.join("");
  }
  