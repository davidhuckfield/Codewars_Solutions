// link : https://www.codewars.com/kata/54b724efac3d5402db00065e/train/javascript

decodeMorse = function(morseCode){
    let morseArray = morseCode.split(" ");
    let returnArray=[];
    for (let i=0; i<morseArray.length; i++) {
      if (morseArray[i]==="") {
        if (morseArray[i-1]==="" && morseArray[i-2]!=="") {
          returnArray.push(" ")
        }
      }
      else {
      returnArray.push(MORSE_CODE[morseArray[i]]);
        }
    }
    return returnArray.join("").trim();
  }