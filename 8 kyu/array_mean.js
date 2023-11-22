// link : https://www.codewars.com/kata/55d277882e139d0b6000005d

var findAverage = function (nums) {
    const sum = nums.reduce((acc,num) => acc + num, 0);
    return sum / nums.length;
  }