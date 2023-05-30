// link : https://www.codewars.com/kata/56676e8fabd2d1ff3000000c

function findNeedle(haystack) {
    let location=0;
    for (let i=0; i<haystack.length; i++) {
      if (haystack[i]==="needle"){location=i}
      }
    
   return `found the needle at position ${location}`;
  }