// link : https://www.codewars.com/kata/5592e3bd57b64d00f3000047/train/javascript

/* first solution - reaches max buffer size
function findNb(m) {
    let total = 0;
    let n = 1;
    while (total < m) {
      total += n * n * n;
      console.log(`this is total: ${total}`);
      n++;
      console.log(`this is n: ${n}`);
    }
  
    console.log(`total is ${total}, m is ${m}, total>m is: ${total>m}`)
    if (total === m) {return n-1}
  else {return -1;}
}
*/

function findNb(m) {
    let n = 0;
    let total = 0;
  
    while (total < m) {
      n++;
      total += Math.pow(n, 3);
    }
  
    if (total === m) {
      return n;
    } else {
      return -1;
    }
  }

