// link : https://www.codewars.com/kata/628e3ee2e1daf90030239e8a/train/javascript

function interlockable(a, b) {
  let aBinary = a.toString(2).split("").reverse().join("");
  let bBinary = b.toString(2).split("").reverse().join("");
  let interlocking = true;
  
  let shortestLength = Math.min(aBinary.length, bBinary.length);
  
  for (let i=0; i<shortestLength; i++) {
    if (parseInt(aBinary[i]) + parseInt(bBinary[i]) >1) {
      interlocking = false;
    }
  }
  return interlocking;
}

//better solution - bitwise AND
/*
function interlockable(a, b) {
  return !(a & b);
}
*/
