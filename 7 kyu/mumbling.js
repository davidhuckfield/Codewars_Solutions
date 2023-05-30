// link : https://www.codewars.com/kata/5667e8f4e3f572a8f2000039

function accum(s) {
	let array = s.split("");
  
  for (let i=0; i<array.length; i++) {
    array[i]=`${array[i].toUpperCase()}${array[i].toLowerCase().repeat(i)}`
  }
  return array.join("-");
}