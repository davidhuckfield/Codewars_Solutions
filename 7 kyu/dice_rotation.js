// link : https://www.codewars.com/kata/5ff2093d375dca00170057bc/train/javascript

function rotations(dieArray) {

  const oppositeFaces = {1: 6, 2: 5, 3: 4, 4: 3, 5: 2, 6: 1};
  let minRotations = Infinity;

  for (let targetFace = 1; targetFace <= 6; targetFace++) {
    let totalRotationsForTarget = 0;
    for (let i = 0; i < dieArray.length; i++) {
      if (dieArray[i] === targetFace) continue; // No rotation needed.
      else if (oppositeFaces[dieArray[i]] === targetFace) totalRotationsForTarget += 2; // Needs 2 rotations.
      else totalRotationsForTarget += 1; // Needs 1 rotation.
    }
    minRotations = Math.min(minRotations, totalRotationsForTarget);
  }
  return minRotations;
}

  console.log(rotations([1,1,6]));