// link : https://www.codewars.com/kata/515de9ae9dcfc28eb6000001

function solution(str){
    let array = str.split("");
   let returnArray=[];
   let twoLetters="";
   
   for(let i=0; i<array.length; i++) {
   //if modulo i === 0 number is first of pair
     if(i%2 === 0) {
       twoLetters+=array[i];
       if (i === array.length-1) {
         twoLetters+="_";
         returnArray.push(twoLetters);
       }
     }
     else {
       twoLetters+=array[i];
       returnArray.push(twoLetters);
       twoLetters="";
     }
   }
   return returnArray;
 }