// link : https://www.codewars.com/kata/574b1916a3ebd6e4fa0012e7

function isOpposite(s1,s2){
    if (s1.length !== s2.length || s1.length===0 || s2.length===0) {return false;}
    let opposite=true;
    function oppositeLetter (letter) {
      if (letter===letter.toLowerCase()) {
        return letter.toUpperCase();
      }
      else {return letter.toLowerCase();}
    }
    for (let i=0; i<s1.length; i++) {
      if (s1[i] !== oppositeLetter(s2[i])) {opposite=false;}
    }
    return opposite;
  }