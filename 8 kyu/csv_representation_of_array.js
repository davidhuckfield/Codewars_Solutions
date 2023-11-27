// link : https://www.codewars.com/kata/5a34af40e1ce0eb1f5000036

function toCsvText(array) {
    let returnString="";
   for (let i=0; i< array.length; i++) {
     for (let y=0; y<array[i].length; y++) {
       if (y===array[i].length-1) {
       returnString=returnString.concat(array[i][y]+"\n");
         }
       else {
         returnString=returnString.concat(array[i][y]+",");
       }
     }
   }
   console.log(returnString);
   //note: changed this to 0,-1 instead of 0,-2 as \n new line character only counts as 1 character
   return returnString.slice(0,-1);
 }