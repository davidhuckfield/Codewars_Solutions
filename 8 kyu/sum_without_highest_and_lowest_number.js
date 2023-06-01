// link : https://www.codewars.com/kata/576b93db1129fcf2200001e6/train/javascript

//reduce the array by adding all values together
//deduct the highest and lowest values from the array
//check if array is 2 or less long, if so return 0

function sumArray(array) {
    if (!array || array.length<=2) {return 0;}
    return array.reduce((accumulator, currentValue) => accumulator + currentValue, 0) - Math.max(...array) - Math.min (...array);
  }