// link : https://www.codewars.com/kata/56644a421b7c94c622000056

function mostLikely(prob1,prob2){
    let prob1array = prob1.split(":");
    let prob2array = prob2.split(":");
    let prob1number = (parseInt(prob1array[0])/parseInt(prob1array[1]));
    let prob2number = (parseInt(prob2array[0])/parseInt(prob2array[1]));
    if(prob1number < prob2number){
      return false;
    }
    return true;
  }