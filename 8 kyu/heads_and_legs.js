// link : https://www.codewars.com/kata/574c5075d27783851800169e

function animals(heads, legs){
    let cows = (4 * heads - legs) / 2;
    let chickens = heads - cows;
    if (cows<0 || chickens < 0 || !Number.isInteger(cows) || !Number.isInteger(chickens)) {
      return "No solutions";
    }
    
    else {
    return [cows, chickens];
      }
  }

  console.log(animals(72,200));