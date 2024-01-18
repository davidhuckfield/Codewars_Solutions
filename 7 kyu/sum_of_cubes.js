// link : https://www.codewars.com/kata/59a8570b570190d313000037

function sumCubes(n){
    let total=0;
    for (let i=1; i<=n; i++) {
      total += Math.pow(i, 3)
    }
    return total;
  }