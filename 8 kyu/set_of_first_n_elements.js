// link : https://www.codewars.com/kata/572b77262bedd351e9000076

function first(arr, n=1) {
    console.log(n)
    let results = [];
    let number = Math.min(n, 5)
    for (let i=0; i<number; i++) {
      results.push(arr[i]);
    }
    return results;
  }