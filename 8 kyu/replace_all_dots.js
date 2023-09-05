// link : https://www.codewars.com/kata/596c6eb85b0f515834000049

//note - use backslash to escape special characters in regex (. is used in regex to match any single character)

var replaceDots = function(str) {
    return str.replace(/\./g, '-');
  }