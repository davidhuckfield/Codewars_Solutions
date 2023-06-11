// link : https://www.codewars.com/kata/56269eb78ad2e4ced1000013/train/javascript

//if the input is not a perfect square return -1.
//perfect square is a number where the square root is also an integer.
// test this by checking if the square root modulo 1 has any remainder
//if input is a perfect square, while loop continues while the nextSQuare variable has no value
//increment the input by 1 and check if the square root modulo 1 has any remainder

function findNextSquare(sq) {
  let nextSquare;
  if (Math.sqrt(sq)%1!=0) {return -1}
  else {
    while (!nextSquare) {
      sq++;
      if (Math.sqrt(sq)%1===0) {nextSquare=sq;}
    }
  }
  return nextSquare;
}