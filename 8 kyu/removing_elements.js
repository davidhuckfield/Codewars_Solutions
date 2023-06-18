// link : https://www.codewars.com/kata/5769b3802ae6f8e4890009d2

function removeEveryOther(arr){
    let newarr=[];
    for (let i=0; i<arr.length; i++) {
      if(i%2===0) {newarr.push(arr[i])}
    }
    return newarr;
  }