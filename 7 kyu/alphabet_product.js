// link : https://www.codewars.com/kata/63b06ea0c9e1ce000f1e2407

//A < B < C < D 

//input is list of A, B, C, D, AxB, BxC, CxD, DxA

//return the value of D 

function alphabet(ns) {
  const A = Math.min(...ns);
  console.log(`A is ${A}`);

  const CxD = Math.max(...ns);
  console.log(`CxD is ${CxD}`);

  let sortedList = [...ns].sort((a,b) => a-b);

  console.log(`this is the sortedList - ${sortedList}`);

  sortedList = sortedList.filter(n => n!==A && n !== CxD);

  console.log(`this is sortedList after removing highest & lowest = ${sortedList}`);

  let possibleBorD = [];

  for (let i=0; i<sortedList.length; i++) {
    if (ns.includes(A*sortedList[i])) {
        possibleBorD.push(sortedList[i]);
    }
  }

  possibleBorD = [...new Set(possibleBorD)];
  console.log(`possible B or D is ${possibleBorD}`);

  const D = Math.max(...possibleBorD);



  return D;

}

//expected answer 4
console.log(alphabet([2,3,4,1,12,6,2,4]));
// console.log(alphabet([2,6,7,3,14,35,15,5]));