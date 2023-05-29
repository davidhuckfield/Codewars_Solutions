// link : https://www.codewars.com/kata/585d7d5adb20cf33cb000235

function findUniq(arr) {
    //filter if the first occurrence index is equal to the last index
    //this should only be true of the unique number
    const uniqueNumber = arr.filter((number, index, array) => {
      return arr.indexOf(number) === arr.lastIndexOf(number);
    });
    //should result in an array with one number, return the first array entry
    return uniqueNumber[0];
  }