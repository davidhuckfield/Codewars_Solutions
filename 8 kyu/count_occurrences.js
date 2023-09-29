// link : https://www.codewars.com/kata/5865918c6b569962950002a1


//my first solution
function strCount(str, letter){  
    let splitString = str.split("");
    let count=0;
    for (let i=0; i<splitString.length; i++) {
      if (splitString[i]===letter) {
        count ++;
      }
    }
    return count;
  }