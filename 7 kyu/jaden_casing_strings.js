// link : https://www.codewars.com/kata/5390bac347d09b7da40006f6

String.prototype.toJadenCase = function () {
    let array = this.split(" ");
    for (let i=0; i<array.length; i++) {
      array[i] = array[i][0].toUpperCase() + array[i].slice(1);
    }
    return array.join(" ");
  };