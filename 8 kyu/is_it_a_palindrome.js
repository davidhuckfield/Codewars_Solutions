// link : https://www.codewars.com/kata/57a1fd2ce298a731b20006a4/train/javascript

function isPalindrome(x) {
    let palindrome = true;
    let array = x.split("");
    for (let i=0; i<array.length/2; i++) {
      if (array[i].toLowerCase() != array[array.length-1-i].toLowerCase()) {
        palindrome = false;
      }
    }
    return palindrome;
  }