// link : https://www.codewars.com/kata/5a00e05cc374cb34d100000d

const reverseSeq = n => {
    let array = [];
    for (let i=n; i>0; i--) {
      array.push(i);
    }
    return array;
  };