// link : https://www.codewars.com/kata/6071ef9cbe6ec400228d9531

function dotCalculator (equation) {
	let array=equation.split(" ");
  let firstnum=array[0].length;
  let secondnum=array[2].length;
  let operator=array[1];
  
  if (operator==="+") {return ".".repeat(firstnum+secondnum);}
  else if (operator==="-") {return ".".repeat(firstnum-secondnum);}
  else if (operator==="*") {return ".".repeat(firstnum*secondnum);}
  else {return ".".repeat(firstnum/secondnum);}
}