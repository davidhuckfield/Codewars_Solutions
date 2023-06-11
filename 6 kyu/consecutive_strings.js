// link : https://www.codewars.com/kata/56a5d994ac971f1ac500003e/train/javascript

//solution that works - using reduce instead of nested for loops
//for each iteration through the for loop, slice the array starting at i and ending at either i + the number of consecutive strings or the end of the array
//use a reduce function to add the lengths of the strings in the sliced array
//if the length of the sliced array is greater than the currentMax, set the currentMax to the length of the sliced array 
//and set the returnStrings array to the sliced array


function longestConsec(strarr, k) {
    if (strarr.length===0 || k>strarr.length || k<=0) {return "";}
     let currentMax=0;
     let returnStrings=[];
     let currentStrings=[];
     for (let i=0; i<strarr.length; i++) {
       let end = Math.min(i+k, strarr.length);
       currentStrings = strarr.slice(i,end);
       let combLength = currentStrings.reduce((acc, curr) => acc + curr.length, 0);
       if (combLength > currentMax) {
         returnStrings=[...currentStrings];
         currentMax=combLength;
       }
       combLength=0;
     }
     return returnStrings.join("");
   }




//original solution - takes up too much memory, buffer size reached
function longestConsec(strarr, k) {
    if (strarr.length===0 || k>strarr.length || k<=0) {return "";}
     let combLength=0;
     let currentMax=0;
     let resultStrings=[];
     
       for (let i=0; i<=strarr.length-k; i++) {
         for (let y=0; y<k; y++) {
           combLength += strarr[i+y].length;
           console.log(`i is ${i}`);
           console.log(`y is ${y}`);
           console.log(`strarr i+y is ${strarr[i+y]}`);
           console.log(`combLength is ${combLength}`);
           console.log(`this continues while y is less than k, y is ${y} and k is ${k}`);
         }
         console.log(`y loop is done`);
         if (combLength > currentMax) {
           console.log(`combLength is ${combLength}, currentMax is ${currentMax}`);
           currentMax=combLength;
           combLength=0;
           console.log(`now currentMax is ${currentMax}`);
           console.log(`resultStrings is ${resultStrings}`);
           resultStrings=[];
           console.log(`now resultStrings has been emptied and is ${resultStrings}`);
           for (let y=0; y<k; y++) {
           resultStrings.push(strarr[i+y]);
           console.log(`now resultStrings is ${resultStrings}`);
           }
           
         }
         else {combLength=0;}
         
       }
     console.log(`i loop continues while i is less than strarr.length - k, strarr.length is ${strarr.length}, k is ${k}`);
     console.log(`i loop is done`);
     console.log(`return is ${resultStrings.join("")}`);
     return resultStrings.join("");
   }