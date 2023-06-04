// link : https://www.codewars.com/kata/558fc85d8fd1938afb000014/train/javascript


// sort the array from lowest to highest
// return the sum of the first two numbers

function sumTwoSmallestNumbers(numbers) {  
    let sortedArray = numbers.sort(function(a, b) {
      return a - b;
    });
    return sortedArray[0] + sortedArray[1];
  }