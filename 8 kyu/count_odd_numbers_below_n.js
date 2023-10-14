// link : https://www.codewars.com/kata/59342039eb450e39970000a6

//first solution (times out on larger numbers)

function oddCount(n){
    let count=0;
    for (let i=0; i<n-1; i++) {
      if (i % 2 === 0) {count++;}
    }
    return count;
  }

//second solution

function oddCount(n){
    return Math.floor(n/2);
  }
  