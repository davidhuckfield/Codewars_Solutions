// link : https://www.codewars.com/kata/53f1015fa9fe02cbda00111a

var Ghost = function() {
    let randomNumber = Math.random();
    let color;
    if (randomNumber <= 0.25) {
      color = "white";
    } else if (randomNumber <= 0.5) {
      color = "yellow";
    } else if (randomNumber <= 0.75) {
      color = "purple";
    } else {
      color = "red";
    }
    this.color = color;
// color=color?
  };