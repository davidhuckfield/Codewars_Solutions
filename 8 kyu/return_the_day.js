// link : https://www.codewars.com/kata/59dd3ccdded72fc78b000b25

function whatday(num) { 
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
    if(num>7 || num <1) {return "Wrong, please enter a number between 1 and 7";}
    else {return days[num-1];}
  
  
  }