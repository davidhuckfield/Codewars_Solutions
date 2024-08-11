// link : https://www.codewars.com/kata/54598d1fcbae2ae05200112c/train/javascript

function all( arr, fun ){
    if (arr.every(num => fun(num))) {
      return true;
    } else {
      return false;
    }
  }