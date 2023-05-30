// link : https://www.codewars.com/kata/56747fd5cb988479af000028

function getMiddle(s) {
    // if length mod 2 is not 0, it's odd
    if (s.length %2 != 0) {
      let middle = Math.ceil(s.length / 2);
      return s.charAt(middle-1);}
    //else it's even
    else {let middle = Math.floor(s.length / 2);
          return `${s.charAt(middle-1)}${s.charAt(middle)}`
         }
  }