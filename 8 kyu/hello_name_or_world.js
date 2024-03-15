// link : https://www.codewars.com/kata/57e3f79c9cb119374600046b

function hello(name) {
    let finalName;
    if (!name || name==="") {
      finalName = "World";
    }
    else {
      finalName = name
    }
  
    let formattedName = finalName.charAt(0).toUpperCase() + finalName.substring(1).toLowerCase();
    return `Hello, ${formattedName}!`
  }