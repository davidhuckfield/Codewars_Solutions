// link : https://www.codewars.com/kata/55f9b48403f6b87a7c0000bd

//solution 1

function paperwork(n, m) {
    if (n<=0 || m<=0) {return 0;}
    else {return m*n;}
  }

  //solution 2

  function paperwork(n, m) {
    return Math.max(n, 0) * Math.max(m,0);
  }