//link : https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1

snail = function(array) {
    //if the first subarray is 1 or less, there will only be 1 subarray, so no further action - just return it
    if (array[0].length<=1) {return array[0];}
    //set up variable to calculate how many steps the function needs to go through the "spiral"
    let totalNumbers = array.length * array[0].length;
    //set up empty array to store the return results
    let results = [];
    //set up counter to count how many times the function has gone "around the spiral"
    //this allows the logic of moving "1 in from the edge" each time it spirals inwards
    let counter=0;

    //while loop to continue until all the numbers in the nested arrays have been processed
    while (results.length<totalNumbers) {
      
    //go through the top row, starting at 0 and moving "1 inwards" each time counter increments
      for (let i=0+counter; i<array[0].length-counter; i++ ) {
    //push the values to the results array
        results.push(array[0+counter][i]);
    //check if total has been reached, if so return and end the loop
        if (results.length===totalNumbers) {return results;}
      }
    
      
  
    //go down the right hand side, starting at second array as the right-most value of the first array will have been covered by the first loop
    //incrementing counter each time to move "1 in" from the edge
      for (let i=1+counter; i<array.length-counter; i++) {
        results.push(array[i][array[i].length-1-counter]);
        if (results.length===totalNumbers) {return results;}
      }
      
    //bottom row starting with last array, go from right to left, missing the right-most value as this will be covered by the right hand side loop
    //increments "1 in" from the edge each time with the counter
      for(let i=array[array.length-1-counter].length-2-counter; i>=0+counter; i--) {
        results.push(array[array.length-1-counter][i]);
        if (results.length===totalNumbers) {return results;}
      }
      
  
    //left hand side starting with second to last array, as first one covered by the bottom row loop
    //stopping before the top array as this covered by the top row loop
    //increments "1 in" from the edge each time with the counter
      for (let i=array.length-2-counter; i>0+counter; i--) {
        results.push(array[i][0+counter]);
        if (results.length===totalNumbers) {return results;}
      }
      
  
    //increment the counter by 1 each time it passes through the while loop
    //each pass through the while loop will be 1 further in to the spiral  
      counter ++;
    }
    console.table(results)
    return results;
}

