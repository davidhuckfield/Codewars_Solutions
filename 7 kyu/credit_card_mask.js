// link : https://www.codewars.com/kata/5412509bd436bd33920011bc

function maskify(cc) {
  let array = cc.split("");
  let masked = [];
  for (let i = 0; i < array.length; i++) {
    if (i >= array.length-4) {masked.push(array[i])}
    else {masked.push("#")}
  }
  return masked.join("");
}
