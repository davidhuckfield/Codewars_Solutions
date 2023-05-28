//link : https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9

//split the string into an array
//set the shortestNumLength variable to the length of the first item in the array as a default
//cycle through all words in the array, if it's shorter, replace the shortestNumLength value
//if not, continue through the loop.

//return the shortestNumLength variable.

function findShort(s){
    let array = s.split(" ");
    let shortestNumLength = array[0].length;
    for (let i=1; i<array.length; i++) {
      console.log(`current word is ${array[i]} which is ${array[i].length}`)
      if (array[i].length<shortestNumLength) {shortestNumLength = array[i].length}
    }
    return shortestNumLength;
  }