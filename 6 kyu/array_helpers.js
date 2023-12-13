// link : https://www.codewars.com/kata/525d50d2037b7acd6e000534

Array.prototype.square = function() {
    return this.map(item => Math.pow(item,2))
   }
   Array.prototype.cube = function() {
     return this.map(item => Math.pow(item,3))
   }
   Array.prototype.average = function() {
     let sum = this.reduce((acc, current) => acc + current,0);
     return sum / this.length;
   }
   Array.prototype.sum = function() {
     return this.reduce((acc,current) => acc + current,0)
   }
   Array.prototype.even = function() {
     return this.filter(function(number) {
       return number % 2 ===0;
     })
   }
   Array.prototype.odd = function() {
     return this.filter(function(number) {
       return number % 2 != 0;
     })
   }