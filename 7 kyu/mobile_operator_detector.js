// link : https://www.codewars.com/kata/55f8ba3be8d585b81e000080

function detectOperator(a){
    let operators = {
        39:"Golden Telecom", 
        50: "MTS", 
        63: "Life:)", 
        66: "MTS", 
        67: "Kyivstar", 
        68: "Beeline", 
        93: "Life:)", 
        95: "MTS", 
        96: "Kyivstar", 
        97: "Kyivstar", 
        98: "Kyivstar", 
        99: "MTS"
    }
    let operatorCode = a.toString().slice(2,4);
    if (!(operators.hasOwnProperty(operatorCode))) {
      return "no info";
    }
    return operators[operatorCode];
  }