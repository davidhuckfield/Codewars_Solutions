// link : https://www.codewars.com/kata/57126304cdbf63c6770012bd

// solution 1

function isDigit(s) {
    if (/^-?\d+(\.\d+)?$/.test(s)){return true;}
    else {return false;}
  }

  // solution 2

  function isDigit(s) {
    return /^-?\d+(\.\d+)?$/.test(s);
  }