// link : https://www.codewars.com/kata/56b29582461215098d00000f

function pipeFix(numbers){
    let min = Math.min(...numbers);
    let max = Math.max(...numbers);
    let returnArray = [];
    for (let i=min; i<=max; i++) {
      returnArray.push(i);
    }
    return returnArray;
  }