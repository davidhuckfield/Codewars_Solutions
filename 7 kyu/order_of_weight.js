// link : https://www.codewars.com/kata/59ff4709ba2a14501500003a

function arrange(arr){
    //sorting function, returns neg if first element is 
    //less, pos if first is greater, 0 if same
    function sortWeights (a, b) {
    //set up units as number of grams
      let units = {G:1, KG:1000, T:1000000};
    
    //creates an array of original value, then the number and 
    // the unit captured by the regex
      let aMatch = a.match(/^(\d+)(\w+)$/);
      let bMatch = b.match(/^(\d+)(\w+)$/);
    
    //calculates value of A and B by multiplying the second item in 
    // each array (the number) by the units in the units object
    // units are identified by the third item in the array (unit)
    //matching the value in the units object
      let aValue = parseInt(aMatch[1]) * units[aMatch[2]];
      let bValue = parseInt(bMatch[1]) * units[bMatch[2]];
    
    //return the difference between a & b to be used by the sort method
      return aValue - bValue;
    }
    return arr.sort (sortWeights);
  
  
  
  }