// link : https://www.codewars.com/kata/5631213916d70a0979000066

function pattern(n){
    let returnstring="1\n";
    for (let i=2; i<n; i++) {
      returnstring = returnstring.concat(1 + "*".repeat(i-1) + i + "\n");
    }
    returnstring = returnstring.concat("1" + "*".repeat(n-1) + n);
    return returnstring;
  }

  console.log(pattern(3));
