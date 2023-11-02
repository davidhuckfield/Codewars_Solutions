// link : https://www.codewars.com/kata/526c7363236867513f0005ca

function isLeapYear(year) {
    let leapyear=false;
    if (year%4 ===0) {leapyear=true;}
    if (year%100===0) {leapyear=false;}
    if (year%400===0) {leapyear=true;}
    return leapyear;
  }