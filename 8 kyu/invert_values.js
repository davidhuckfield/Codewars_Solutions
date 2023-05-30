// link : https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad

//solution 1:

function invert(array) {
    for (let i=0; i<array.length; i++) {
      array[i]=-array[i];
    }
    
    return array;
  }

  //solution 2:

  function invert(array) {
    return array.map((number) => -number);
 }