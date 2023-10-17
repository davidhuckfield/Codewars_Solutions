// link : https://www.codewars.com/kata/5a6663e9fd56cb5ab800008b

var humanYearsCatYearsDogYears = function(humanYears) {
    let catYears = 0;
    let dogYears = 0;
    
    if (humanYears >= 1) {
      catYears += 15;
      dogYears += 15;
    }
    if (humanYears >= 2) {
      catYears += 9;
      dogYears += 9;
    }
    if (humanYears >= 3) {
      catYears += 4*(humanYears-2);
      dogYears += 5*(humanYears-2);
    }
    return [humanYears,catYears,dogYears];
  }