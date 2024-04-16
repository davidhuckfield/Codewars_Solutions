// link : https://www.codewars.com/kata/5a3e1319b6486ac96f000049

function pairs(ar){
    let consecutiveCount = 0;

    for (let i=0; i<ar.length-1; i+=2) {
     if (Math.abs(ar[i]-ar[i+1])===1) {
                consecutiveCount++;
            }
    }
    return consecutiveCount;
   };

// 3
console.log(pairs([1,2,5,8,-4,-3,7,6,5]));