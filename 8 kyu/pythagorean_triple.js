// link : https://www.codewars.com/kata/5951d30ce99cf2467e000013

function isPythagoreanTriple(integers) {
    let triple = false;
    if (Math.pow(integers[0],2) + Math.pow(integers[1],2) === Math.pow(integers[2], 2)) {
      triple = true;
    }
    if (Math.pow(integers[0],2) + Math.pow(integers[2],2) === Math.pow(integers[1], 2)) {
      triple = true;
    }
    if (Math.pow(integers[1],2) + Math.pow(integers[2],2) === Math.pow(integers[0], 2)) {
      triple = true;
    }
    return triple;
  }