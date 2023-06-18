// link : https://www.codewars.com/kata/58f8a3a27a5c28d92e000144

function firstNonConsecutive (arr) {
    let firstNonSec=null;
    for (let i=1; i<arr.length; i++) {
      if (arr[i]!==arr[i-1]+1) {firstNonSec=arr[i]}
    }
    return firstNonSec;
  }