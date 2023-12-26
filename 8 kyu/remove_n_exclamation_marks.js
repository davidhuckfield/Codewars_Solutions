// link : https://www.codewars.com/kata/57faf7275c991027af000679

function remove(s,n){
    console.log(`s is ${s}, n is ${n}`);
    let returnString = "";
    let counter=0;
    
    for (let i=0; i<s.length; i++) {
      if (s[i]==="!") {
        console.log(`letter is !`);
        console.log(`counter is ${counter}`)
        if (counter<n) {
          counter++;
          console.log(`counter has been increased by 1 - it's now ${counter}`);
        }
        else {
          console.log(`counter ${counter} is greater than n ${n}`);
          returnString+=s[i];
          console.log(`returnString is now ${returnString}`);
        }
      }
      else {
        console.log(`letter is not !`)
        returnString+=s[i];}
        console.log(`returnString is ${returnString}`);
    }
    return returnString;
  }