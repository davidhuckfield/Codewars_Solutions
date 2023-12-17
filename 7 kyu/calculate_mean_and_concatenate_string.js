// link : https://www.codewars.com/kata/56f7493f5d7c12d1690000b6

function mean(lst){
    let returnString="";
    let sum=0;
    let numCount=0;
    for (let i=0; i<lst.length;i++) {
      let current;
      if (isNaN(lst[i])) {
        current = lst[i];
      }
      else {
        current = parseInt(lst[i]);
           }
      if (typeof current==="number") {
        sum+=current;
        numCount++;
      }
      else if (typeof lst[i]==="string") {
        returnString+=current;
      }
    }
    let returnArray=[];
    let mean = parseFloat(sum/numCount);
    returnArray.push(mean);
    returnArray.push(returnString);
    return returnArray;
  }