// link : https://www.codewars.com/kata/5a8d2bf60025e9163c0000bc

function solve(arr){
    let counts = {};

    arr.forEach(number => {
        if (!counts[number]) {
            counts[number]=1
        }
        else {
            counts[number]++;
        }
    });

    console.log(`arr pre sort ${arr}`);
    
    arr.sort((a, b) => {
        const countComparison = counts[b]-counts[a];
        if (countComparison===0) {
            return a-b;
        }
        return countComparison;
    });

    console.log(`arr post-sort ${arr}`);

    return arr;
  }

  // [3,3,3,5,5,7,7,2,9]
  console.log(solve([2,3,5,3,7,9,5,3,7]));