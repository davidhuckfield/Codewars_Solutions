// link : https://www.codewars.com/kata/541c8630095125aba6000c00

function digitalRoot(n) {
    let total = 0;
      while (n > 0 || total > 9) {
        if (n === 0) {
          n = total;
          total = 0;
        }
        total += n % 10;
        n = Math.floor(n / 10);
      }
      return total;
    }