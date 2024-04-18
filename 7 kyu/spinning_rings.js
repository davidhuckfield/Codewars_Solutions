// link : https://www.codewars.com/kata/59afff65f1c8274f270020f5

function spinningRings(innerMax, outerMax) {
    let innerCurrent = 0;
    let outerCurrent = 0;
    let spinCount = 0;
    
    do {
      if (innerCurrent===0) {
        innerCurrent=innerMax
      }
      else {
        innerCurrent--;
      }
      if (outerCurrent===outerMax) {
        outerCurrent=0;
      }
      else {
        outerCurrent++;
      }
      spinCount++;
    } while (innerCurrent!=outerCurrent);
    return spinCount;
  };

  // 5
  console.log(spinningRings(2,3))