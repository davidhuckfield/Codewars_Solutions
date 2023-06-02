// link : https://www.codewars.com/kata/546e2562b03326a88e000020

function squareDigits(num){
    //convert num to string
    let string=num.toString();
    //split the number into digits array
    let array=string.split("");
    //for loop to square each number
    //parse each back into a number and square it
    //change the item back to a string and change the item in the array
    for (let i=0; i<array.length; i++) {
      array[i]=(Math.pow(parseInt(array[i]), 2)).toString();
    }
    //concatenate the array back into a string
    let newstring=array.join("");
    //after the numbers are concatenated, convert back into a number - parseInt
    let newnumber=parseInt(newstring);
    return newnumber;
  }