// link : https://www.codewars.com/kata/5302d846be2a9189af0001e4/train/javascript

function sayHello( name, city, state ) {
    let greeting = [];
    greeting.push("Hello, ");
    for (let i=0; i<name.length; i++) {
      if (i===name.length-1) {greeting.push(name[i])}
      else {greeting.push(name[i] + " ")}
    }
    greeting.push("! Welcome to ");
    greeting.push(city);
    greeting.push(", ");
    greeting.push(state);
    greeting.push("!");
    
    return greeting.join("");
  }