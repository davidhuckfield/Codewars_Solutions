// link : https://www.codewars.com/kata/576bb71bbbcf0951d5000044

function countPositivesSumNegatives(input) {
    if (input===null || !input.length) {return [];}
    else {
    let poscount=0;
    let negsum=0;
    let returnarray = [];
    for (let i=0; i<input.length; i++) {
      if (input[i]<=0) {negsum+=input[i];}
      else {poscount++;}
      }
    returnarray.push(poscount);
    returnarray.push(negsum);
    return returnarray;}
    
  }