// link : https://www.codewars.com/kata/57a2013acf1fa5bfc4000921

function findAverage(array) {
    let sum = 0;
   if (array.length===0) {return 0;}
   else {
  
   for (let i=0; i<array.length; i++) {
     sum+=array[i];
   }}
   return sum/array.length;
 }