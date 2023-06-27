// link : https://www.codewars.com/kata/5842df8ccbd22792a4000245/train/javascript

function expandedForm(num) {
  let expanded = num.toString().split("");
  let resultsArray = [];
  for (let i=0; i<expanded.length; i++) {
    let multiplierString = "1" + "0".repeat(expanded.length-1-i);
    let multiplier = parseInt(multiplierString);
    if (expanded[i] !=0 ) {resultsArray.push(expanded[i]*multiplier)};
  }
  return resultsArray.join(" + ")
}