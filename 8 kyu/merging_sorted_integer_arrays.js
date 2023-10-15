// link : https://www.codewars.com/kata/573f5c61e7752709df0005d2

//merge arrays with the spread operator
//remove duplicates with Array.from(new Set(array))
//sort with sort((a,b)=>a-b)

function mergeArrays(a, b) {
    let mergedArray = [...a,...b];
    let noDuplicates = Array.from(new Set(mergedArray))
    return noDuplicates.sort((a,b)=>a-b);
  }