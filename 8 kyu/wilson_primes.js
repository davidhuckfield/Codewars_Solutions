// link : https://www.codewars.com/kata/55dc4520094bbaf50e0000cb

function amIWilson(p) {
 
    function isPrime(number) {
        if (number <= 1) {
          return false;
        }
      
        if (number <= 3) {
          return true;
        }
      
        if (number % 2 === 0 || number % 3 === 0) {
          return false;
        }
      
        for (let i = 5; i * i <= number; i += 6) {
          if (number % i === 0 || number % (i + 2) === 0) {
            return false;
          }
        }
      
        return true;
      }

    function factorial (n) {
      if (n===0 || n===1) {
        return 1;
      }
      let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    
    return result;
    }
    
    if (!isPrime(p)) {return false;}

    let calculation = (factorial(p-1) + 1) / (p * p);

    const epsilon = 1e-10; // Adjust the epsilon as needed
    

    console.log(calculation)
  
    return Math.round(calculation) === calculation;
  }

  amIWilson(99);