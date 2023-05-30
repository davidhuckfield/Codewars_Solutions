//link : https://www.codewars.com/kata/57eae65a4321032ce000002d

function fakeBin(x){
    let newArr = x.split("");
    for (i = 0; i < newArr.length; i ++) {
      if (newArr[i] < 5) {
        newArr[i] = 0;
      }
      else {
        newArr[i] = 1;
      }
    }
    return newArr.join("")
  }