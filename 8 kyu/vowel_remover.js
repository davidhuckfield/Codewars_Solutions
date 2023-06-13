// link : https://www.codewars.com/kata/5547929140907378f9000039/train/javascript

function shortcut (string) {
  let vowels = ["a", "e", "i", "o", "u"];
  let array = string.split("");
  let filteredArray = array.filter(function(letter) {
    return !vowels.includes(letter);
  });
  return filteredArray.join("");
  }

