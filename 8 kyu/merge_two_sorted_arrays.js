// link : https://www.codewars.com/kata/5899642f6e1b25935d000161

function mergeArrays(arr1, arr2) {
    let newArray = [...new Set([...arr1, ...arr2])];
    newArray.sort((a,b) => a-b);
    return newArray;
  }