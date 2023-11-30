// link : https://www.codewars.com/kata/57642a90dee2da8dd3000161

function arr2bin(arr){
    let sum = arr.reduce((acc, curr) => {
                         const num = typeof curr === "number" ? curr : 0;
                         return acc + num}
                         , 0);
    return sum.toString(2);
  }