// link : https://www.codewars.com/kata/54da539698b8a2ad76000228

function isValidWalk(walk) {
    if (walk.length === 10) {
      let vertstart=0;
      let horizstart=0;
      for (let i=0; i<walk.length; i++) {
        if (walk[i] === "n") {vertstart++;}
        else if (walk[i] === "s") {vertstart--;}
        else if (walk[i] === "w") {horizstart--;}
        else if (walk[i] === "e") {horizstart++;}
      }
      if (vertstart!=0 || horizstart!=0) {return false;}
      else {return true;}
    }
    else {return false;}
}