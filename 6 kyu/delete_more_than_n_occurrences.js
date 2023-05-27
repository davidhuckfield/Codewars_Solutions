//link : https://www.codewars.com/kata/554ca54ffa7d91b236000023

function deleteNth(arr,n){
    let countObject = {};
    let result = [];
    
    for (let i=0; i<arr.length; i++) {
      if (countObject.hasOwnProperty(arr[i])) {
        countObject[arr[i]]++;
        if (countObject[arr[i]] <= n) {
          result.push(arr[i]);
        }
      }
      else {
        countObject[arr[i]] = 1;
        result.push(arr[i]);
      }
    }
    return result;
  }