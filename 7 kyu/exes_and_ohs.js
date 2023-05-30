// link : https://www.codewars.com/kata/55908aad6620c066bc00002a

function XO(str) {
    let numberOfXs = 0;
    let numberOfOs = 0;
  for (let i=0; i<str.length; i++) {
    if (str[i].toLowerCase() === "x") {numberOfXs++;}
    else if (str[i].toLowerCase() === "o") {numberOfOs++;}
  }
  return numberOfXs === numberOfOs;
}