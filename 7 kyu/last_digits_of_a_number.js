// link : https://www.codewars.com/kata/5cd5ba1ce4471a00256930c0

function lastDigit(n, d) {
  
    //d is the last d digits in the number/string
    //n is a
    
    let nString = n.toString();
    
    let array = nString.split('')
    
    let answer = [];
    
    for(let i=(Math.max((array.length-d),0)); i < array.length; i++){
      
        
      answer.push(parseInt(array[i]))
    
    }
    
    return answer
    
  }