// link : https://www.codewars.com/kata/555eded1ad94b00403000071/train/javascript

function SeriesSum(n) {
    let divisor = 1;
    let returnNumber = 0;
    for (let i=0; i<n; i++) {
      returnNumber += (1 / divisor);
      if (divisor===1) {divisor=4}
      else {divisor+=3}
    }
    return returnNumber.toFixed(2).toString();
  }