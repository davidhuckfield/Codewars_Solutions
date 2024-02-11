// link : https://www.codewars.com/kata/56a4872cbb65f3a610000026

function maxRot(n) {

    //sub function to rotate the input number by 1 digit, specifying how many initial digits to fix
    function rotateLeft(number, fixedDigits) {
        //convert number to string to be able to manipulate it
        const numString = number.toString();
        //declare rotated string variable to store result of rotation
        let rotatedString = "";
        //if the input is length 1 or 0, no rotation necessary
        if (numString.length<=1) {return number;}
        //if no digits are to be fixed, return substring starting at 1 followed by character at 0
        if (fixedDigits===0) {
        rotatedString = numString.substring(1) + numString[0];
        }
        //if any digits are to be fixed, add string from 0 to fixedDigits unchanged, then digits after the one to be moved, then finally the rotated digit
        else {
        rotatedString = numString.substring(0, fixedDigits) + numString.substring(fixedDigits+1) + numString[fixedDigits];
        }
        //convert the string back into an integer and return it
        return parseInt(rotatedString, 10);
    }
    
    //create array to store results
    let resultsArray = [n];
    //create variable to store changing number as it is rotated
    let currentNumber = n;

    //convert n to string to determine length, loop through until end of number is reached
    for(let i=0; i<n.toString().length; i++) {
        //perform the rotation on the current number, incrementing the number of fixed digits each time
        currentNumber = rotateLeft(currentNumber, i)
        //push the result to the array so the results can be compared
        resultsArray.push(currentNumber);
    }
    
    //use the spread operator to get the highest number in the results array and return it
    return Math.max(...resultsArray);
  }

  console.log(maxRot(38458215));