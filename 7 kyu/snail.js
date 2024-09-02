// link : https://www.codewars.com/kata/66cdc6ab9e7a9f009e0ca8f6/train/javascript

function canSnailReachEnd(length, speed, lengthIncreases) {
    let snailPosition = 0;
    let rubberBandEnd = length;
    
    for (let i=0; i<525600; i++) {
      snailPosition += speed;
      rubberBandEnd += lengthIncreases;
      if (snailPosition >= rubberBandEnd) {
        return true;
      }
    }
  return false;
}

//better / more efficient solution:
/*
function canSnailReachEnd(length, speed, lengthIncreases) {
  return lengthIncreases < speed
    && (length / (speed - lengthIncreases) < 365.25 * 24 * 60);
}
*/
