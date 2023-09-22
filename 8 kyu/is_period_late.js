// link : https://www.codewars.com/kata/578a8a01e9fd1549e50001f1

function periodIsLate(last, today, cycleLength) {
    //change seconds to 0 to calculate difference in days only
    last.setHours(0, 0, 0, 0);
    today.setHours(0, 0, 0, 0);
    let numberOfDays = (today.getTime()-last.getTime()) / (1000 * 60 * 60 * 24);
    
    if (numberOfDays>cycleLength) {return true;}
    else {return false;}
  }