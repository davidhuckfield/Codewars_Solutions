// link : https://www.codewars.com/kata/5886da134703f125a6000033

function pagesNumberingWithInk(current, numberOfDigits) {
    while (numberOfDigits>0) {
      let currentNumberString=current.toString();
      if (currentNumberString.length>numberOfDigits) {
        numberOfDigits=0;
      }
      else {
        numberOfDigits-=(currentNumberString.length);
        current++;
      }
    }
    return current-1;
    
  }