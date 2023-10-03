// link : https://www.codewars.com/kata/596e4ef7b61e25981200009f

function aspectRatio(x,y){
    const desiredAspectRatio = 16/9;
    const newX = Math.ceil(y * desiredAspectRatio);
    return [newX, y];
  }