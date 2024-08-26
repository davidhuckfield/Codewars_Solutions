// link : https://www.codewars.com/kata/559590633066759614000063/train/javascript

function minMax(arr){
    let returnArray =[];
    returnArray.push(Math.min(...arr));
    returnArray.push(Math.max(...arr));
    return returnArray;
  }