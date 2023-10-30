// link : https://www.codewars.com/kata/562926c855ca9fdc4800005b
//note : Math.pow() not allowed.

function numberToPower(number, power){
    console.info(Math.log2(1024));
    if (power === 0) {return 1;}
    let result = number;
    for (let i=1; i<power; i++) {
      result *= number;
    }
    return result;
  }