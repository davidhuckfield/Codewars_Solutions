// link : https://www.codewars.com/kata/5a5915b8d39ec5aa18000030

function findMissing(arr1, arr2) {
    for (let i = 0; i < arr2.length; i++) {
        let index = arr1.indexOf(arr2[i]);
        if (index > -1) {
            arr1.splice(index, 1);
        }
    }
    return arr1[0];
}


  // 2
  console.log(findMissing([1, 2, 3], [1, 3]));