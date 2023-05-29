// link : https://www.codewars.com/kata/62a611067274990047f431a8

//if current value of i is even, push first value to results array, if odd push second.

function alternate(n, firstValue, secondValue){
    let array =[];
    for (let i = 0; i < n; i++) {
     if (i % 2 === 0) {
        array.push(firstValue)
     } else {
       array.push(secondValue)
     }
   } return array;
  }