// link : https://www.codewars.com/kata/5bb0c58f484fcd170700063d

function pillars(numPill, dist, width) {
    let distCM = dist * 100;
    let distQty = numPill - 1;
    let distBetweenTotal = distCM * distQty;
    let pillarQty = Math.max(numPill-2, 0);
    let pillarTotal = pillarQty * width;
    let total = distBetweenTotal + pillarTotal;
    return total;
  }
  