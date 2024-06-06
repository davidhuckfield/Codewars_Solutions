// link : https://www.codewars.com/kata/57eaec5608fed543d6000021/train/javascript

function divCon(x){
  let intTotal = 0;
  let stringTotal = 0;
  for (let i=0; i<x.length; i++) {
    if (typeof x[i]==="number") {
      intTotal+=x[i]
    }
    else {
      stringTotal+=parseInt(x[i]);
    }
  }
  return intTotal - stringTotal;
}
