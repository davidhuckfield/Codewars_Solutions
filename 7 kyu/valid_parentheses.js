// link : https://www.codewars.com/kata/6411b91a5e71b915d237332d

function validParentheses(parenStr) {
    let array=parenStr.split("");
    let bracketsOpen=0;
   
    for (let i=0; i<array.length; i++) {
      if (array[i] === "(") {
        bracketsOpen++;
        if (bracketsOpen<0) {return false;}}
      else if (array[i] === ")") {
        bracketsOpen--;
        if (bracketsOpen<0) {return false;}}
      
    }
    if (bracketsOpen === 0) {return true;}
    else {return false;}
  
  }