// link : https://www.codewars.com/kata/56cd44e1aa4ac7879200010b

String.prototype.isUpperCase = function() {
    let uppercase = true;
    let splitString=this.split("");
    for (let i=0; i<splitString.length; i++) {
      if (splitString[i].toUpperCase() !== splitString[i]) {
        uppercase = false;
      }
    }
    return uppercase;
  }