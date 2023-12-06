// link : https://www.codewars.com/kata/564d398e2ecf66cec00000a9

var typeOfTriangle = function (sideA, sideB, sideC) {
    if (typeof sideA !="number" || typeof sideB != "number" || typeof sideC != "number") {
      return "Not a valid triangle";
    }
    if (sideA + sideB <= sideC || sideA + sideC <= sideB || sideB + sideC <= sideA) {
      return "Not a valid triangle";
    }
    if (sideA === sideB && sideB === sideC) {
      return "Equilateral";
    }
    if (sideA === sideB || sideB === sideC || sideA === sideC) {
      return "Isosceles";
    }
    return "Scalene";
  }