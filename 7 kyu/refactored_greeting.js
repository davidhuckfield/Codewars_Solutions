// link : https://www.codewars.com/kata/5121303128ef4b495f000001

var Person = function (name) {
    this.name = name;
  }
  
  Person.prototype.greet = function (name) {
    return "Hello " + name + ", my name is " + this.name;
  }
  
  var joe = new Person ('Joe');
  joe.greet('Kate');