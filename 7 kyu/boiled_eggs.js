// link : https://www.codewars.com/kata/52b5247074ea613a09000164

function cookingTime(eggs) {
    if (eggs === 0) {return 0;}
    let timesBoiled = Math.ceil(eggs / 8);
    return parseInt(timesBoiled * 5, 0);
  }