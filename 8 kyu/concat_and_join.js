// link : https://www.codewars.com/kata/5731861d05d14d6f50000626

function bigToSmall(arr){
    let combinedArray=[];
    for (let i=0; i<arr.length; i++) {
      combinedArray = combinedArray.concat(arr[i]);
    }
   
    combinedArray.sort(function(a, b){return b-a});
    return combinedArray.join('>');
  }

    console.log(bigToSmall([[1,2],[3,4],[5,6]]))