// link : https://www.codewars.com/kata/5500d54c2ebe0a8e8a0003fd

//divide larger by smaller
//save remainder as R 
//replace larger with smaller, and smaller with remainder
//repeat until remainder is 0
//last divisor before remainder becomes 0 is the GCD

function mygcd(x,y){
    let larger = Math.max(x,y);
    // console.log(larger);
    let smaller = Math.min(x,y);
    // console.log(smaller);
    let gcd;
    while (true) {
    let remainder = larger % smaller;
    if (remainder === 0) {
        gcd = smaller;
        break;
    }
    // console.log(remainder);
    larger = smaller;
    smaller = remainder;
    // console.log(larger);
    // console.log(remainder);
    }
    return gcd;
  }

  console.log(mygcd(30,12));