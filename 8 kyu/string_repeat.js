// link : https://www.codewars.com/kata/57a0e5c372292dd76d000d7e

function repeatStr (n, s) {
    let string=s;
    for (let i=1; i<n; i++) {
      string += s;
    }
    return string;
  }