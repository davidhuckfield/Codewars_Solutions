// link : https://www.codewars.com/kata/59b710ed70a3b7dd8f000027/train/javascript

function isAllPossibilities(x){

    let allPoss = true;
    if (x.length===0) {
      allPoss = false;
    }
    for (let i=0; i<x.length; i++) {
  
      if (!x.includes(i)) {
        allPoss = false;
      }
    }
    return allPoss;
  }