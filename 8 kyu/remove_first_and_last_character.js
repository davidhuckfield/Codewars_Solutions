// link : https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0

function removeChar(str){
    let splitString=str.split("");
     splitString.pop();
     splitString.shift();
     return splitString.join("");
   };
   