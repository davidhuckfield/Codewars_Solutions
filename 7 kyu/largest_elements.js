// link : https://www.codewars.com/kata/53d32bea2f2a21f666000256

function largest(n, array) {
    let returnArray = [];
    array.sort((a,b) => b-a);
    for (let i=0; i<n; i++) {
      returnArray.push(array[i]);
    }
    returnArray.sort((a,b)=>a-b);
    return returnArray;
  }