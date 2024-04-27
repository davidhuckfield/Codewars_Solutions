// link : https://www.codewars.com/kata/57f59da8d3978bb31f000152

function makeMeSlow() {
    let string = "";
    for (let x = 0; x < 110000; ++x) {
      if (parseInt(string)%2===0) {
        string+=string;
      }
      else {string+="3"}
    }
  }