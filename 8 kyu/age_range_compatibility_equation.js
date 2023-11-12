// link : https://www.codewars.com/kata/5803956ddb07c5c74200144e

function datingRange(age){
    if (age<=14) {
    let min = Math.floor(age-0.10*age);
    let max = Math.floor(age+0.10*age);
      return min + "-" + max;
    }
    else {
    let min = Math.floor(age/2+7);
    let max = Math.floor((age-7)*2);
      return min + "-" + max;
      }
    
  }