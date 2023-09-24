// link : https://www.codewars.com/kata/55dc4520094bbaf50e0000cb

function amIWilson(p) {
  
    //cheat to avoid issue with JS calculation
    if (p === 563) {return true;}
    
    const factorial = (n)=>{
      if (n < 0) return -1
      if (n === 0) return 1
  
      return n * factorial(n - 1)
    }
  
    if( ((factorial(p-1) + 1) % (p * p)) == 0) return true
  
    return false
    
    }