// link : https://www.codewars.com/kata/57cfdf34902f6ba3d300001e

function twoSort(s) {
    let returnArray=[];
    s.sort();
    let firstString=s[0]
    for (let i=0; i<firstString.length-1; i++) {
      returnArray.push(firstString[i] + "***");
    }
    returnArray.push(firstString[firstString.length-1]);
    return returnArray.join("");
  }