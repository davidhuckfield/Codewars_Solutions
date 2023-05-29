// link : https://www.codewars.com/kata/5287e858c6b5a9678200083c

//test if the the input number is a Narcissistic number or Armstrong number 
//a Narcissistic number is a number that is the sum of its own digits each raised to the power of the number of digits

function narcissistic(value) {
    let array = value.toString().split("");
    let digitsSum=0;
    for (let i=0; i<array.length; i++) {
      digitsSum = digitsSum + Math.pow(parseInt(array[i]), array.length);
    }
    if (value === digitsSum) {
      return true;
    }
    else {return false;}
  }