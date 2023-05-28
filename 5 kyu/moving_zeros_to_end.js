// link : https://www.codewars.com/kata/52597aa56021e91c93000cb0

//cycles through for loop backwards so that removing items does not affect the array position
//if the current item is 0, remove it with splice and add it to a separate array
//at the end, return the two arrays combined back together with spread operators

function moveZeros(arr) {
  let i = 0;
  let zerosArray=[];
  for (let i = arr.length; i >= 0; i--) {
    if (arr[i] === 0) {
      zerosArray.push(arr.splice(i, 1)[0]);
    }
  
  }
  return [...arr, ...zerosArray];
}