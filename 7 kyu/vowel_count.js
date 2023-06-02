// link : https://www.codewars.com/kata/54ff3102c1bad923760001f3

function getCount(str) {
  let splitString=str.split("");
  let count=0;
  for (let i=0; i<splitString.length; i++) {
    if (["a", "e", "i", "o", "u"].includes(splitString[i])) {
      count ++;}
    }
    return count;
}