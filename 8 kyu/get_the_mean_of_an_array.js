// link : https://www.codewars.com/kata/563e320cee5dddcf77000158/train/javascript

function getAverage(marks){
    const sum = marks.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    const average = sum / marks.length;
    return Math.floor(average);
    
  }