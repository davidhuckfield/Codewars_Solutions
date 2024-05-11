// link : https://www.codewars.com/kata/594093784aafb857f0000122

function diff(a, b){

    if (a.length===0) {return b;}
    if (b.length===0) {return a;}
    let aCopy = [...a];
    let bCopy = [...b];
    
    aCopy=aCopy.filter(element => !b.includes(element));
    bCopy=bCopy.filter(element => !a.includes(element));
    
    let joinedArray = [...new Set([...aCopy, ...bCopy])].sort();
    return joinedArray;
    
  }