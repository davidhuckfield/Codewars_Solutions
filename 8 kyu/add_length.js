// link : https://www.codewars.com/kata/559d2284b5bb6799e9000047/train/javascript

function addLength(str) {
    let array = str.split(" ");
    let results = [];
    for (let i=0; i<array.length; i++) {
      results.push(array[i] + " " + array[i].length);
    }
    return results;
  }
  