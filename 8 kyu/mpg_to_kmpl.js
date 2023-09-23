// link : https://www.codewars.com/kata/557b5e0bddf29d861400005d

function converter (mpg) {
    let milesPerLitre=mpg/4.54609188;
    let kpl=(milesPerLitre*1.609344).toFixed(2);
    return parseFloat(kpl);
  }