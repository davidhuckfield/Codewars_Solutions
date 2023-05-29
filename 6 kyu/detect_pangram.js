// link : https://www.codewars.com/kata/545cedaa9943f7fe7b000048

function isPangram(string){
    var regex = /([a-z])(?!.*\1)/g;
    string = string.toLowerCase();
      return (string.match(regex) || []).length === 26;
  }