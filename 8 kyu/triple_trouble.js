// link : https://www.codewars.com/kata/5704aea738428f4d30000914

function tripleTrouble(one, two, three){
  let array = [];
  for (let i=0; i<one.length; i++) {
    array.push(one[i]);
    array.push(two[i]);
    array.push(three[i]);
  }
  return array.join("");
 }