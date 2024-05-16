// link : https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097

function century(year) {
    if (year <= 0) {
        return "not a valid year";
      } else if (year <= 100) {
        return 1;
      } else if (year % 100 === 0) {
        return year / 100;
      } else {
        return Math.floor(year / 100) + 1;
      }
    }

/*
function century(year) {
    switch (true) {
        case year <= 0:
            return "not a valid year";
        case year <= 100:
            return 1;
        case year % 100 === 0:
            return year / 100;
        default:
            return Math.floor(year / 100) + 1;
    }
}
*/
