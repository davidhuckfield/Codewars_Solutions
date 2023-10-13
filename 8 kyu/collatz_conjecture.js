// link : https://www.codewars.com/kata/577a6e90d48e51c55e000217

var hotpo = function(n){
    if (n === 0 || n === 1) {return 0;} //Optional Handler to n = 0
    let count=0;
    while (n!=1) {
      if (n % 2 != 0) {
        n = 3*n+1;
      }
      else {
        n = n/2;
      }
      count ++;
    }
  return count;
}