// link : https://www.codewars.com/kata/59414b46d040b7b8f7000021

function tacofy(word) {
    let tacoArray=["shell"];
    let ingredients={
      a:"beef", e:"beef", i:"beef", o:"beef", u:"beef", 
      t:"tomato", l:"lettuce", c:"cheese", g:"guacamole", s:"salsa"}
    for (let i=0; i<word.length; i++) {
      if (ingredients[word.charAt(i).toLowerCase()]) {
        tacoArray.push(ingredients[word.charAt(i).toLowerCase()]);
      }
    }
    tacoArray.push("shell");
    return tacoArray;
  }