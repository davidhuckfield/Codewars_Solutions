// link : https://www.codewars.com/kata/568d0dd208ee69389d000016

function rentalCarCost(d) {
    let rentalCost = d * 40;
    if (d >= 7) {rentalCost -=50;}
    else if (d >= 3) {rentalCost -=20}
    return rentalCost;
  }
