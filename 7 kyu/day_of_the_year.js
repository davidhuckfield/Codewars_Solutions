// link : https://www.codewars.com/kata/5a1ebe0d46d843454100004c

function toDayOfYear(arr) {
    let isLeapYear = false;

    if (arr[2] % 4 === 0) {isLeapYear = true;}
    if (arr [2] % 100 === 0) {
        if (arr[2] % 400 === 0) {isLeapYear = true;}
        else {isLeapYear = false;}
    }
    
    let daysOfMonth = [31,28,31,30,31,30,31,31,30,31,30,31];
    if (isLeapYear) {daysOfMonth[1] = 29}
    
    let dayOfYear=0;
    
    for (let i=0; i<arr[1]-1; i++) {
      dayOfYear += daysOfMonth[i]
      console.log(`dayOfYear : ${dayOfYear}`)
    }
    
    dayOfYear += arr[0];
    
    console.log(dayOfYear);
    return dayOfYear;
    
  }

  toDayOfYear([25,12,2017]);
  //toDayOfYear([1,1,2000]);