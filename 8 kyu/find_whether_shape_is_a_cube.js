// link : https://www.codewars.com/kata/58d248c7012397a81800005c

var cubeChecker = function(volume, side){
    if (side <= 0) {
      return false
      } else if  (side**3 == volume) { 
      return true;
    }
    return false;
  };