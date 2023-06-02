// link : https://www.codewars.com/kata/554b4ac871d6813a03000035

function highAndLow(numbers){
    //convert the string into an array using space separator
    let array = numbers.split(" ");
    //for loop to convert each array item into a number
    for (let i=0; i<array.length; i++) {
      array[i]=parseInt(array[i])
    }
    //sort the array in ascending order
    array.sort(function(a, b) {
    if (a < b) {
      return 1; // Sort a to be after b
    } else if (a > b) {
      return -1; // Sort a to be before b
    } else {
      return 0; // Leave a and b unchanged
    }
  });
    console.log(array);
    //create lowest & highest variables
    let highest=(array[0]).toString();
    let lowest=(array[(array.length-1)]).toString();
    //create a new variable to concat first & last with space between
    let bothnumbers = highest.concat(" ", lowest);
    //return highest number
    return bothnumbers;
  }