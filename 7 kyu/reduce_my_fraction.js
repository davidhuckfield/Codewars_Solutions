// link : https://www.codewars.com/kata/576400f2f716ca816d001614

function reduce(fraction) {
    const numerator = fraction[0];
    const denominator = fraction[1];
    
    function GCD(a,b) {
      if (b===0) {return a};
      return GCD(b,a%b);
    }
    
    const commonDivisor = GCD(numerator,denominator);
    
    const reducedNumerator = numerator / commonDivisor;
    const reducedDenominator = denominator / commonDivisor;
    
    return [reducedNumerator, reducedDenominator];
  }

  console.log(reduce([45,120]));