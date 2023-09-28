// link : https://www.codewars.com/kata/57a083a57cb1f31db7000028

function powersOfTwo(n){
    let returnArray = [];
    for (let i=0; i<=n; i++) {
      returnArray.push(Math.pow(2,i))
    }
    return returnArray;
  }