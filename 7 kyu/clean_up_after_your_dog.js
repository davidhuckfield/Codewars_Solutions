// link : https://www.codewars.com/kata/57faa6ff9610ce181b000028/train/javascript

function crap(x, bags, cap){
  let current=0;
  for (let i=0; i<x.length; i++) {
    if (x[i].includes("D")) {
      return "Dog!!";
    }
    for (let y=0; y<x[i].length; y++) {
      if (x[i][y]==="@") {
        current++;
        if (cap===0) {return "Cr@p";}
        if (current===cap) {
          if (bags>0) {
            current=0;
            bags--;
          }
          else {
            return "Cr@p";
          }
        }
      }
    }
  }
  return "Clean";
}
