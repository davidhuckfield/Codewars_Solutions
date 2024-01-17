// link : https://www.codewars.com/kata/55466644b5d240d1d70000ba

function candies(kids){
    if (kids.length<=1) {
        return -1;
    }
    let count = 0;
    let highest = Math.max(...kids);
    for (let i=0; i<kids.length; i++) {
        count += highest-kids[i];
    }
    return count;
  }

  console.log(candies([5,8,6,4]));
  console.log(candies([2]));