// link : https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec

function persistence(num) {
    let counter = 0;
    while (num>=10) {
    //convert number into string
    let stringNum = num.toString()
     //split string into digits
    let stringArray = stringNum.split("")
    //set up a total
    let total = 1;
    //loop through and multiply by each digit
    for (let i=0; i<stringArray.length; i++) {
      //parseInt each number to make it number again
      total = total * parseInt(stringArray[i]);
    }
    counter ++;
    num = total;
      }
   return counter;
    //add 1 to the counter
    //does that number have a length of 1? 
    //if so, return the counter
    //if not, do the loop again
  }