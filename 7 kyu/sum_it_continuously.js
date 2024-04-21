// link : https://www.codewars.com/kata/59b44d00bf10a439dd00006f

function add(arr) {
    let returnArray = [];

    for (let i=0; i<arr.length; i++) {
        let currentNumber = 0;
        for (let y=0; y<=i; y++) {
            currentNumber += arr[y];
        }
        returnArray.push(currentNumber);
    }
    return returnArray;
  }

  console.log(add([1,2,3,4,5]));

  