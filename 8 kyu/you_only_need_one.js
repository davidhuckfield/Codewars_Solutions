// link : https://www.codewars.com/kata/57cc975ed542d3148f00015b

//solution 1: 

function check(a, x) {
    for (let i=0; i<a.length; i++) {
      if (x===a[i]) {return true;}
    }
    return false;
  }

  //solution 2:

  function check(a, x) {
    return a.includes(x);
  }