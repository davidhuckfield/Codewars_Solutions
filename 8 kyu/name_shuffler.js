// link : https://www.codewars.com/kata/559ac78160f0be07c200005a/train/javascript

function nameShuffler(str){
    let array = str.split(" ");
    array.unshift(array.pop());
    return array.join(" ");
  }