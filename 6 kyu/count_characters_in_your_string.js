// link : https://www.codewars.com/kata/52efefcbcdf57161d4000091

function count(string) {
    let letterCount= {};
    for (let i=0; i<string.length; i++) {
      let letter = string[i];
      console.log(letter);
      letterCount[letter] = (letterCount[letter] || 0) + 1;
      console.log(letterCount);
    }
    
    return letterCount;
  }