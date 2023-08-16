// link : https://www.codewars.com/kata/570597e258b58f6edc00230d/train/javascript

function array(string) {
    let array = string.split(",");
    array.pop();
    array.shift();
    if (array.length===0) {
      return null
    }
    else {return array.join(" ");}
    
  }