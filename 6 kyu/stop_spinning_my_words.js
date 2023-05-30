// link : https://www.codewars.com/kata/5264d2b162488dc400000001

function spinWords(string){
    let array = string.split(" ");
    for (let i=0; i<array.length; i++) {
      if (array[i].length>=5) {
        array[i]=array[i].split("").reverse().join("");
      }
    }
    return array.join(" ");
  }