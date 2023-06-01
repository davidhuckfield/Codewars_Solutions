// link : https://www.codewars.com/kata/57eaeb9578748ff92a000009

// first solution 

function sumMix(x){
    let total = 0;
    for (let i = 0; i<x.length; i++) {
      total += parseInt(x[i]);
      }
    return total;
  }

  //using reduce array function 

  function sumMix(x){
    return x.reduce((accumulator, currentValue) => accumulator + parseInt(currentValue), 0)
  }