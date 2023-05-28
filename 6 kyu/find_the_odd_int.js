// link : https://www.codewars.com/kata/54da5a58ea159efa38000836

//find the number that appears an odd number of times.
//create an empty variable to store the odd number once found 
//first for loop cycles through each item in the array, and sets up a count variable to count how many times the number has been encountered
//second nested for loop compares each item to all the other items in the array, and increments the count by 1 each time it encounters the same number
//(it doesn't exclude itself as each number needs to count itself as 1 occurrence)
//if at the end of the inner for loop, the current count is not divisible by 2 with no remainder, it is odd and oddNumber is assigned that number
//return the oddNumber variable.

function findOdd(A) {
    let oddNumber;
    for (let i=0; i<A.length; i++) {
      let numberCount=0;
      for (let y=0; y<A.length; y++) {
        if (A[y]===A[i]) {numberCount++;}
      }
      if (numberCount % 2 != 0) {oddNumber = A[i];}
    }
    return oddNumber;
  }