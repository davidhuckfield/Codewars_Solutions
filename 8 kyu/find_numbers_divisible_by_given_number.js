// link : https://www.codewars.com/kata/55edaba99da3a9c84000003b

function divisibleBy(numbers, divisor){
    let returnArray = [];
    for (let i=0; i<numbers.length; i++) {
      if (numbers[i]%divisor===0) {
        returnArray.push(numbers[i]);
      }
    }
    return returnArray;
  }