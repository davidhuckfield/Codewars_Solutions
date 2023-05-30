// link : https://www.codewars.com/kata/57f780909f7e8e3183000078

function grow(x){
    let result = x[0];
    for (let i=1; i<x.length; i++) {
      result = result * x[i];
    }
    return result;
  }