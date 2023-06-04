// link : https://www.codewars.com/kata/5583090cbe83f4fd8c000051

function digitize(n) {
  let string = n.toString();
  let array = string.split("");
  array.reverse();
  return array.map(Number);
}