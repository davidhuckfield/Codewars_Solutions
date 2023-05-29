// link : https://www.codewars.com/kata/5679aa472b8f57fb8c000047

function findEvenIndex(arr) {
    let position = -1;
     for (let i=0; i<arr.length; i++) {
     //example position 3
       let leftTotal = 0;
       for (let l=0; l<i; l++) {leftTotal+=arr[l];}
       let rightTotal=0;
       for (let r=i+1; r<arr.length; r++) {rightTotal+=arr[r];}
       if (leftTotal===rightTotal) {
         position=i;
         break;
       }
       
     }
     return position;
   }