// link : https://www.codewars.com/kata/585eaef9851516fcae00004d
//strings starting b,f or k are naughty
//strings starting g, s or n are nice
//calculate number of nice or naughty strings
//return greatest, if equal, return naughty

function whatListAmIOn(actions){
    //set up variables to count nice/naughty instances
    let naughty=0;
    let nice=0;
    for (let i=0; i<actions.length; i++) {
        //if first character of current string is b/f/k, increment naughty by 1
      if (actions[i][0]==="b" || actions[i][0]==="f" || actions[i][0]==="k") {
        naughty++;
      }
      //if first character of current string is g/s/n, increment nice by 1
       if (actions[i][0]==="g" || actions[i][0]==="s" || actions[i][0]==="n") {
        nice++;
      }
    }
    if (nice > naughty) {
      return "nice";
    }
    else {return "naughty";}
  }