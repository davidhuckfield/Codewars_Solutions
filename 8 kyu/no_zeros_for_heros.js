// link : https://www.codewars.com/kata/570a6a46455d08ff8d001002

function noBoringZeros(n) {
  let array = n.toString().split("");
  for (let i=array.length-1; i>0; i--) {
    if (parseInt(array[i])===0) {array.splice(i,1)}
    else {break;}
  }
  return parseInt(array.join(""));
}