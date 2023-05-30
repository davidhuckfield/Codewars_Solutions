// link : https://www.codewars.com/kata/5b077ebdaf15be5c7f000077

var countSheep = function (num){
    let result="";
    for (let i=0; i<num; i++) {
      result+=`${i+1} sheep...`
    }
    return result;
  }