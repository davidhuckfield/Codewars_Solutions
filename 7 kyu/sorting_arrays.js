// link : https://www.codewars.com/kata/57fe864854685b1c420002e0/train/javascript

//sort the array according to the index of the first matching element in the second array
//a1.findIndex((element)=> argument) returns the index of the first element that satisfies the argument
//element.startsWith(a[0]) returns true if the element starts with the first letter of the argument

function sortArray(a1, a2) {
    a2.sort((a,b)=>
    a1.findIndex((element)=>element.startsWith(a[0])) 
    - a1.findIndex((element)=>element.startsWith(b[0])))
     return a2;
     
   }