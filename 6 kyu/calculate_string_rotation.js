// link : https://www.codewars.com/kata/5596f6e9529e9ab6fb000014

function shiftedDiff(first,second){

    for (let i=0; i<first.length; i++) {
      if (first === second) {
        return i;
      }
      first = first[first.length-1] + first.slice(0, first.length-1)
    }
    return -1
  }