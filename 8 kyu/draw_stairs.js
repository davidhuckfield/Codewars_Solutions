// link : https://www.codewars.com/kata/5b4e779c578c6a898e0005c5

function drawStairs(n) {
    let returnString=""
    if (n===1) {
      return "I"}
    for (let i=0; i<n-1; i++) {
      returnString=returnString.concat(" ".repeat(i) + "I\n")
    }
    returnString=returnString.concat(" ".repeat(n-1) + "I")
    console.log(returnString);
    return returnString;
  }