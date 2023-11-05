// link : https://www.codewars.com/kata/56efc695740d30f963000557

String.prototype.toAlternatingCase = function () {
    let result = "";
    for (let i=0; i<this.length; i++) {
      if (this[i].toUpperCase()===this[i]) {
        result += this[i].toLowerCase()
      }
      else {
        result+= this[i].toUpperCase()
      }
    }
    return result;
  }

  //alternate / shorthand method:

  String.prototype.toAlternatingCase = function () {
    return this.split("").map(a => a === a.toUpperCase()? a.toLowerCase(): a.toUpperCase()).join('')
}