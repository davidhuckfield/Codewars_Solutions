// link : https://www.codewars.com/kata/5d50e3914861a500121e1958

function addLetters(...letters) {
    //if no letters, return z
    if (letters.length===0) {return "z";}
    //create empty array to store converted numbers
    let numbersArray = [];
    //loop through letters array, a is charcode 97 so deduct 96 from each to get the values with a starting at 1
    //convert them to integer
    //push them to the array
    for (let i=0; i<letters.length; i++) {
      numbersArray.push(parseInt(letters[i].charCodeAt(0))-96);
    }
    //reduce the numbers array into a numerical sum
    let sum = numbersArray.reduce((acc,curr) => acc + curr, 0);
    //calculate for any "overflow" by getting the remainder from 26 (letters of alphabet)
    let adjustedSum = (sum-1) % 26;
    //to convert back to charCode add 97 (because we already subtracted one in previous step)
    let charCode = adjustedSum + 97;
    //convert the charcode back into a letter and return it
    return String.fromCharCode(charCode);
  }