// link : https://www.codewars.com/kata/578aa45ee9fd15ff4600090d

function sortArray(array) {
    let evenNumbers = [];
     let oddNumbers = [];
     for (let i=0; i<array.length; i++) {
       if (array[i] % 2 === 0) {evenNumbers.push(array[i])}
       else {
         evenNumbers.push("x");
         oddNumbers.push(array[i]);
       }
     }
     oddNumbers.sort((a,b) => a-b )
     for (let i=0; i<evenNumbers.length; i++) {
       if (evenNumbers[i] === "x") {evenNumbers[i] = oddNumbers.shift();}
       
     }
     return evenNumbers;
   }