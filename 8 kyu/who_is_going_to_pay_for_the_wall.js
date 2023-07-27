// link : https://www.codewars.com/kata/58bf9bd943fadb2a980000a7

function whoIsPaying(name){
    let results = [];
    results.push(name);
    if(name.length>2) {
    results.push(name.substring(0,2));
      }
    return results;
  }