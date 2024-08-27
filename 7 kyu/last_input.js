// link : https://www.codewars.com/kata/541629460b198da04e000bb9/train/javascript

function last(list){
  list = arguments.length === 1 ? arguments[0] : arguments;
  
  if (typeof list === "string" || Array.isArray(list)) {
    return list[list.length-1];
  }
  
  return arguments[arguments.length-1];
}

//testing