// link : https://www.codewars.com/kata/566efcfbf521a3cfd2000056

function flipNumber(n)
{
  function reverse(number, fixedDigits) {
    if (number.length<=1) {return number;}
    if (fixedDigits===0) {
        return number.split("").reverse().join("");
    }
     return number.substring(0,fixedDigits) + number.substring(fixedDigits).split("").reverse().join("");
  }
  let currentNumber = n;
  for (let i=0; i<n.length; i++) {
    currentNumber = reverse(currentNumber,i);
  }
  return currentNumber;
}

console.log(flipNumber("012345"));