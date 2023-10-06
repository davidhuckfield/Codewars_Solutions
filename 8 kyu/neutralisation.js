// link : https://www.codewars.com/kata/65128732b5aff40032a3d8f0

function neutralise(s1, s2) {
    let returnArray = [];
    let s1split = s1.split("");
    let s2split=s2.split("");
    for (let i=0; i<s1split.length; i++) {
      if (s1split[i] === "+") {
        if (s2split[i] === "+") {
          returnArray.push("+")
        }
        else {returnArray.push(0)}
      }
      else {
        if (s2split[i] === "-") {
          returnArray.push("-")
        }
        else {returnArray.push(0)}
      }
     
    }
     return returnArray.join("");
  }