// link : https://www.codewars.com/kata/57faa6ff9610ce181b000028/train/javascript

function crap(x, bags, cap){
  let current=0;
  for (let i=0; i<x.length; i++) {
    for (let y=0; y<x[i].length; y++) {
    if (x[i][y]==="D") {
      return "Dog!!";
    }
      }
  }
  
  for (let i=0; i<x.length; i++) {
    for (let y=0; y<x[i].length; y++) {
      if (x[i][y]==="@") {
        current++;
        if (bags===0) {return "Cr@p";}
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

//more efficient solution
/*
function crap(x, bags, cap){
  var yard = x.reduce( (a, b) => a.concat(b) );
  return yard.includes('D') ? 'Dog!!' : bags * cap - yard.filter( val => val === '@' ).length > 0 ? 'Clean' : 'Cr@p';
}
*/
