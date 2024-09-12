// link : https://www.codewars.com/kata/55a144eff5124e546400005a

class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    
    getInfo () {
      return this.name + "s age is " + this.age;
    }
    
    get info() {
      return this.getInfo();
    }
    
    
  }

//