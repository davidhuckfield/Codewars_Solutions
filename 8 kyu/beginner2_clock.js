// link : https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a

//solution 1

function past(h, m, s){
    let seconds = s * 1000;
    let minutes = m * 60000;
    let hours = h * 3600000;
    return (seconds + minutes + hours);
  }

  //solution 2

  function past(h, m, s){
    return ((s*1000) + (m*60000) + (h*3600000));
    }