// link : https://www.codewars.com/kata/550554fd08b86f84fe000a58/train/javascript

//nested for loops - first cycles through each entry in array 1, then within that the second loop compares that value to each one in array 2.
//if the value is found in array 2, it is pushed to the output array and the loop breaks to avoid duplicates.
//the output array is then sorted alphabetically and returned.

function inArray(array1,array2){
    let outputArray = [];
    for (let i =0; i<array1.length; i++) {
      for (let y=0; y<array2.length; y++) {
        if (array2[y].includes(array1[i])) {
          outputArray.push(array1[i]);
          break;}
      }
    }
    outputArray.sort((a,b) => a.localeCompare(b));
    return outputArray;
  }