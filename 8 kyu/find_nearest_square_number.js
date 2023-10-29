// link : https://www.codewars.com/kata/5a805d8cafa10f8b930005ba

function nearestSq(n){
    if (Math.sqrt(n)%1 === 0) {return n;}
    let nearestSqbelow=0;
    let nearestSqabove=0;
    let nBelow=n;
    let nAbove=n;
    while (nearestSqbelow===0) {
      nBelow--;
      if (Math.sqrt(nBelow)%1===0) {
        nearestSqbelow = nBelow;
      }
    }
     while (nearestSqabove===0) {
      nAbove++;
      if (Math.sqrt(nAbove)%1===0) {
        nearestSqabove = nAbove;
      }
    }
    let diffBelow = n-nearestSqbelow;
    let diffAbove = nearestSqabove-n;
    let nearestAbsolute = diffBelow<diffAbove ? nearestSqbelow : nearestSqabove;

    return nearestAbsolute;
  }

  nearestSq(10);

  // Best practice in CodeWars:

  const nearestSq = n => Math.pow(Math.round(Math.sqrt(n)), 2);