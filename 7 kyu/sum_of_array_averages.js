// link : https://www.codewars.com/kata/56d5166ec87df55dbe000063/train/javascript

const sumAverage = (arr) => {
  let result = 0;

  for (let i=0; i<arr.length; i++) {
      let sum = arr[i].reduce((acc, value) => acc + value, 0);
      let average = sum / arr[i].length;
      result += average;
    }
  
  return Math.floor(result);
}
