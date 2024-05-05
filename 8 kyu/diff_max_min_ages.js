// link : https://www.codewars.com/kata/5720a1cb65a504fdff0003e2/train/javascript

function differenceInAges(ages){
    let returnArray = [];
    let minAge = Math.min(...ages);
    let maxAge = Math.max(...ages);
    let diff = maxAge - minAge;
    return [minAge, maxAge, diff];
  }
  