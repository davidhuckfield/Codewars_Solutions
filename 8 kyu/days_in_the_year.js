// link : https://www.codewars.com/kata/56d6c333c9ae3fc32800070f

function yearDays(year)
{
  let leapyear = false;
  if (year % 4 === 0) {
    leapyear = true;
  }
  if (year % 100 === 0) {
    leapyear=false;
  }
  if (year % 400 === 0) {
    leapyear = true;
  }
  return leapyear ? year + " has 366 days" : year + " has 365 days";
}