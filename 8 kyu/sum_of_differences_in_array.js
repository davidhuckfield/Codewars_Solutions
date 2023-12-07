// link : https://www.codewars.com/kata/5b73fe9fb3d9776fbf00009e

function sumOfDifferences(arr) {
    let total = 0;
    arr = arr.sort((a,b) => b-a);
    for (let i=0; i<arr.length-1; i++) {
      total += (arr[i]-arr[i+1]);
    }
    return total;
  }