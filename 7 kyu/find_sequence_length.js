// link : https://www.codewars.com/kata/5566b0dd450172dfc4000005/train/javascript

var lengthOfSequence = function (arr, n) {
  let count = arr.filter(number => number===n).length;
  if (count !=2 ) {return 0;}
  let length = 0;
  let maxLength = 0;
  let counting = false;
  for (let i=0; i<arr.length; i++) {
    if (counting===false) {
      if (arr[i]===n) {
        counting=true;
        length++;
      }
    } else {
      if (arr[i]===n) {
        counting=false;
        length++;
        if (length > maxLength) {
          maxLength = length;
        }
        length = 0;
      } else {
        length++;
      }
    }
  }
  return maxLength;
};
