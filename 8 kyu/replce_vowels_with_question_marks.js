// link : https://www.codewars.com/kata/57fb09ef2b5314a8a90001ed

function replace(s){
    let vowels = ["a", "e", "i", "o", "u"]
    let splitString = s.split("");
    for (let i=0; i<splitString.length; i++) {
      if (vowels.includes(splitString[i].toLowerCase())) {
        splitString[i]="!"
      }
    }
    return splitString.join("");
    
  }