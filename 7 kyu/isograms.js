// link : https://www.codewars.com/kata/54ba84be607a92aa900000f1

//an isogram is a word with no repeating letters 
//split the string into an array
//create new lettersArray to push non-repeated letters imageOrientation: 
//start by assuming str is an isogram until proven otherwise (isogram = true)
//cycle through array and check if current letter already exists in lettersArray (also convert to lowercase as it must check duplicates regardless of case)
//return the boolean isogram variable

function isIsogram(str){
    let array=str.split("");
    let lettersArray=[];
    let isogram=true;
    for (let i=0; i<array.length; i++) {
      if (lettersArray.includes(array[i].toLowerCase())) {isogram=false;}
      else {lettersArray.push(array[i].toLowerCase());}
    }
    return isogram;
  }