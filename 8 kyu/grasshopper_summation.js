// link : https://www.codewars.com/kata/55d24f55d7dd296eb9000030

// solution 1

var summation = function (num) {
    let x = 1
     for (let i = 2; i<(num+1); i++){
       x += i;
     } return x;
   }

   // solution 2

   var summation = function (num) {
    let total = 0;
    for (let i = 1; i <= num; i++) {
      total+=i
    }
    return total
  };