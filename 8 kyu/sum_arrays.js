// link : https://www.codewars.com/kata/53dc54212259ed3d4f00071c

// Sum Numbers
function sum (numbers) {
    let total=0;
      for (let i=0; i<numbers.length; i++) {
        total += numbers[i];
      }
      
      return total;
  };