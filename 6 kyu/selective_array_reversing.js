// link : https://www.codewars.com/kata/58f6000bc0ec6451960000fd

function selReverse(array, length) {
    let returnArray = [];
    let currentPosition = 0;
    let currentSlice;
    
    while (currentPosition<array.length) {
      
    if (currentPosition + length > array.length-1) {
      currentSlice = array.slice(currentPosition, array.length)
    } 
    else {
      currentSlice = array.slice(currentPosition, currentPosition+length)
    }
      
    currentSlice.reverse();
    returnArray.push(...currentSlice);
    currentPosition+=length;
      }
    return returnArray;
  }

  //other solution using for loop, accounts for ending portions because giving an end coordinate to slice which is greater than the array end will just return the rest of the array

  function selReverse2(array, length) {
    const returnArray = [];
    for (let i = 0; i < array.length; i += length) {
      const currentSlice = array.slice(i, i + length);
      currentSlice.reverse();
      returnArray.push(...currentSlice);
    }
    return returnArray;
  }


  console.log(selReverse([2,4,6,8,10,12,14,16], 3));
  console.log(selReverse2([2,4,6,8,10,12,14,16], 3));

