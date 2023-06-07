// link : https://www.codewars.com/kata/5a2be17aee1aaefe2a000151/train/javascript

function arrayPlusArray(arr1, arr2) {
  let sum = arr1.reduce((accumulator, currentValue) => accumulator += currentValue, 0) + arr2.reduce((accumulator, currentValue) => accumulator += currentValue, 0)
return sum;
  }