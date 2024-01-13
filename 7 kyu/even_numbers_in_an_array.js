// link : https://www.codewars.com/kata/5a431c0de1ce0ec33a00000c

function evenNumbers(array, number) {
    let returnArray = [];
    let count=0;
    for (let i=array.length-1; i>=0; i--) {
        if (array[i]%2===0) {
            if (count<number) {
            returnArray.push(array[i]);
            count ++;
            }
        }
    }
    returnArray = returnArray.reverse();
    return returnArray;
  }

  console.log(evenNumbers([1,2,3,4,5,6,7,8,9], 3));