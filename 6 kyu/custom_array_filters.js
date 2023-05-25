// link : https://www.codewars.com/kata/53fc954904a45eda6b00097f

Array.prototype.even = function(){
    return this.filter(function(element) {
     return Number.isInteger(element) && element % 2 === 0;
   });
 }
 Array.prototype.odd = function(){
   return this.filter(function(element) {
     return Number.isInteger(element) && element % 2 != 0;
   });
 }
 Array.prototype.under = function(x){
  return this.filter(function(element) {
     return Number.isInteger(element) && element < x
   });
 }
 Array.prototype.over = function(x){
   return this.filter(function(element) {
     return Number.isInteger(element) && element > x
   });
 }
 Array.prototype.inRange = function(min,max){
   return this.filter(function(element) {
     return Number.isInteger(element) && element <= max && element >= min
   });
 }