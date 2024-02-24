// link : https://www.codewars.com/kata/57eb936de1051801d500008a

function explode(x){
    let score=0;
    if (!isNaN(x[0]) && !isNaN(x[1])) {
      score = x[0]+x[1];
    }
    else if (!isNaN(x[0])) {
      score = x[0];
    }
    else if (!isNaN(x[1])) {
      score = x[1];
    }
    else {return "Void!"}
    
    let returnArray = [];
    
    for (let i=0; i<score; i++) {
      returnArray.push(x);
    }
    
    return returnArray;
  }