// link : https://www.codewars.com/kata/56b0ff16d4aa33e5bb00008e

function shortenToDate(longDate) {
    let commaPosition = longDate.indexOf(",");
    return longDate.slice(0, commaPosition);
  }