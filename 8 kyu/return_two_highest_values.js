// link : https://www.codewars.com/kata/57ab3c09bb994429df000a4a/train/javascript

function twoHighest(arr) {
    let newArray = [...new Set (arr)];
    let returnArray = [];
    newArray.sort((a,b) => b-a);
    if (newArray[0]) {
    returnArray.push(newArray[0])
      }
    if (newArray[1]) {
    returnArray.push(newArray[1])
      }
    return returnArray;
  }
