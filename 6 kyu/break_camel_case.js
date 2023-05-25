// link : https://www.codewars.com/kata/5208f99aee097e6552000148/train/javascript

function solution(string) {
  //split array into individual characters
  let array = string.split("");
  //create empty result array to push to
  let result = [];

  for (let i=0; i<array.length; i++) {
    //if current character is upper case, push a space then the character
    if (array[i] === array[i].toUpperCase()) {
      result.push(` ${array[i]}`);
    }
    //if not upper case
    else {
      result.push(array[i]);
    }
  }
  return result.join("");
}