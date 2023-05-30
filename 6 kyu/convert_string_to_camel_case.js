// link : https://www.codewars.com/kata/517abf86da9663f1d2000003

function toCamelCase(str){
    let newArray = str.split(/[-_]/);
    for (let i=1; i<newArray.length; i++) {
    //split the string into an array
    let wordArray=newArray[i].split("");
    //uppercase the first letter
    wordArray[0]=wordArray[0].toUpperCase();
    //concatenate the array back into a string
    let word = wordArray.join("");
    newArray[i]=word;
    }
    return newArray.join("");
  }