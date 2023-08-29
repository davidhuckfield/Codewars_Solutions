// link : https://www.codewars.com/kata/563b74ddd19a3ad462000054/train/javascript

function stringy(size) {
    let string =  "";
    let digit = 1;
    for (let i=0; i<size; i++) {
      if (digit === 1) {
      string = string.concat(digit)
      digit = 0;
      }
      else {
        string = string.concat(digit)
        digit=1
      }
    }
    return string;
  }