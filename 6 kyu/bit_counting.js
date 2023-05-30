// link : https://www.codewars.com/kata/526571aae218b8ee490006f4

var countBits = function(n) {
    let binaryN = n.toString(2);
    let binaryArray = binaryN.split("");
    let count = 0;
    for (let i=0; i<binaryArray.length; i++) {
      if (binaryArray[i] === "1") {count++;}
    }
    return count;
  };