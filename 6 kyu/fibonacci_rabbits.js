// link : https://www.codewars.com/kata/5559e4e4bbb3925164000125

function fib_rabbits(n, b) {
    let immaturePairs=1;
    let maturePairs=0;
    let births=0;
    for (let i=1; i<=n; i++) {
      births=(maturePairs*b);
      maturePairs+=immaturePairs;
      immaturePairs=births;
    }
    return maturePairs;
  }