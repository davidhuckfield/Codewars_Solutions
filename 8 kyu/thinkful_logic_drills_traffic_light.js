// link : https://www.codewars.com/kata/58649884a1659ed6cb000072/train/javascript

//first solution

function updateLight(current) {
    switch (current) {
        case "green" : return "yellow";
        break;
        case "yellow" : return "red";
        break;
        case "red" : return "green";
        break;
    }
  }

  // ternary notation

  function updateLight(current) {
  
    return current === 'yellow' ? 'red' : current === 'green' ? 'yellow' : 'green';
  
  }