// link : https://www.codewars.com/kata/56fc55cd1f5a93d68a001d4e

function stairsIn20(s){
    let totals = s.map(day => day.reduce((acc, num) => acc + num, 0));
    let sum = totals.reduce((acc, num) => acc + num, 0);
    return sum * 20;
  }