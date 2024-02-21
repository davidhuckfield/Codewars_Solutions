// link : https://www.codewars.com/kata/5f6d533e1475f30001e47514

function consecutive(arr, a, b) {
    let consecutive=false;
    for (let i=0; i<arr.length; i++) {
      if (arr[i]===a) {
        if (arr[i+1]===b) {
          consecutive=true;
        }
      }
      if (arr[i]===b) {
        if (arr[i+1]===a) {
          consecutive=true;
        }
      }
    }
    return consecutive;
  }

  //Better solution:

  function consecutive(arr, a, b) {
    return Math.abs(arr.indexOf(a) - arr.indexOf(b)) == 1;
  }