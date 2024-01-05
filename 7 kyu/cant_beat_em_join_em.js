// link : https://www.codewars.com/kata/5d37899a3b34c6002df273ee

function cantBeatSoJoin(numbers) {
  numbers.sort((a,b) => {
    let sumA = a.reduce((acc,val) => acc + val, 0);
    let sumB = b.reduce((acc,val) => acc + val, 0);
    return sumB - sumA;
  })
  let returnArray = [];
  for (let i=0; i<numbers.length; i++) {
    for (let y=0; y<numbers[i].length; y++) {
        returnArray.push(numbers[i][y]);
    }
  }
  return returnArray;
}

console.log(cantBeatSoJoin([[1, 2], [3, 4], [5, 6], [7, 8], [9]]));