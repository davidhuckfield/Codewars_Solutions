// link : https://www.codewars.com/kata/546f922b54af40e1e90001da

function alphabetPosition(text) {
    let textArray=text.toLowerCase().split("");
    let positionArray = [];
    let alphabet=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    
    for (let x=0; x<textArray.length; x++) {
      
    for (let i=0; i<alphabet.length; i++) {
      if (textArray[x]===alphabet[i]) {positionArray.push(i+1);}
    }
    }
    return positionArray.join(" ");
    
  }