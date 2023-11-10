// link : https://www.codewars.com/kata/572b6b2772a38bc1e700007a

function uniTotal (string) {
    let total = 0;
    for (let i=0; i<string.length; i++) {
      total += string[i].charCodeAt();
    }
    return total;
  }

  //more efficient solution

  const uniTotal = str => [...str].reduce((acc, char) => acc + char.charCodeAt(0), 0);