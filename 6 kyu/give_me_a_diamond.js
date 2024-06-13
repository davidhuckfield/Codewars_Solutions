// link : https://www.codewars.com/kata/5503013e34137eeeaa001648

function diamond(n){
    console.log(n);
    if (n===1) {return "*\n";}
    if (n % 2 === 0 || n <= 0) {return null;}
    let returnString = "";
    let currentStars = 1;
    let currentSpaces = Math.floor(n/2);
    
    while (currentStars<=n) {
      returnString += " ".repeat(currentSpaces) + "*".repeat(currentStars) + "\n";
      currentStars += 2;
      currentSpaces -= 1;
    }
    
    currentStars -=2;
    currentSpaces +=1;
    
   while (currentStars > 1) {
      currentStars -= 2;
      currentSpaces += 1;
      returnString += " ".repeat(currentSpaces) + "*".repeat(currentStars) + "\n";
    }
    
    return returnString;
  }