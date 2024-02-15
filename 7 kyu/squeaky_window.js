// link : https://www.codewars.com/kata/55f8b5b09ec923860200000f

function sliding(nums, k) {
     let resultsArray = [];
     for (let i=0; i<=nums.length-k; i++) {
        let currentSlice = nums.slice(i, i+k);
        let currentMax = Math.max(...currentSlice);
        resultsArray.push(currentMax);
     }

     return resultsArray;
 }

 console.log(sliding([1,3,-1,-3,5,3,6,7],3))