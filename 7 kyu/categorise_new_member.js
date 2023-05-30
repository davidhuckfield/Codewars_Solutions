// link : https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa

function openOrSenior(data){
    // make a newArr
    // for loop through array values
    //if statement or switch statement if 55 or over and handicap is over 7 then senior
    //else open
    let newArr = [];
    for (i = 0; i < data.length; i++) {
      if (data[i][0] >= 55 && data[i][1] > 7) {
        newArr.push("Senior");
      } else {
        newArr.push("Open");
      }}
        return newArr;
    }