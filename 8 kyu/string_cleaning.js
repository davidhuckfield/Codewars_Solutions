// link : https://www.codewars.com/kata/57e1e61ba396b3727c000251/train/javascript

function stringClean(s){

    let cleanedString ="";
    for (let i=0; i<s.length; i++) {
      if (s[i].charCodeAt(0) >= 48 && s[i].charCodeAt(0) <= 57) {
        
      } else {
        cleanedString += s[i];
      }
    
  
  }
      return cleanedString;
    }