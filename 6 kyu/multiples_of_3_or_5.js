// link : https://www.codewars.com/kata/514b92a657cdc65150000006

function solution(number){
    let total =0;
    for (let i=0; i<number; i++) {
      if ([i] % 5 === 0 || [i] % 3 === 0) {total +=i;}
    }
    return total;
  }