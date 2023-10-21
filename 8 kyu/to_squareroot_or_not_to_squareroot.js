// link : https://www.codewars.com/kata/57f6ad55cca6e045d2000627

function squareOrSquareRoot(array) {
    let returnArray = [];
    for (let i=0; i<array.length; i++) {
      if (Math.sqrt(array[i])%1 === 0) {
        returnArray.push(Math.sqrt(array[i]))
      }
      else {returnArray.push(Math.pow(array[i],2))}
    }
    return returnArray;
  }