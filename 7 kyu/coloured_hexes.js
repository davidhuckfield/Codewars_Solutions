// link : https://www.codewars.com/kata/57e17750621bca9e6f00006f

function hexColor(codes){
    let codesSplit = codes.split(" ");
    let red = parseInt(codesSplit[0]) || 0;
    let green = parseInt(codesSplit[1]) || 0;
    let blue = parseInt(codesSplit[2]) || 0;
    
    if ((red+green+blue)===0) {
      return "black";
    }
    
    else if (red===green && green===blue) {
      return "white";
    }
    else if (Math.max(red, green, blue)===red) {
      if (red===blue) {return "magenta";}
      else if (red===green) {return "yellow";}
      else {return "red";}
    }
    else if (Math.max(red, green, blue)===green) {
      if (green===red) {return "yellow";}
      else if (green===blue) {return "cyan";}
      else {return "green";}
    }
    else if (Math.max(red, green, blue===blue)) {
      if (blue===red) {return "magenta";}
      else if (blue===green) {return "cyan";}
      else {return "blue";}
    }
  }