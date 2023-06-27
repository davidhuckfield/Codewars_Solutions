// link : https://www.codewars.com/kata/57241e0f440cd279b5000829

function sumMul(n,m){
    if (n<=0 || m<=0) {return "INVALID"}
    let sum=0;
    let current=n;
    while (current<m) {
      sum +=current;
      current+=n;
    }
    return sum;
  }