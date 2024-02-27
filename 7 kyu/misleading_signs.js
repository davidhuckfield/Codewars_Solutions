// link : https://www.codewars.com/kata/65dd5b414ccda60a4be32c2a

function gaslighting(shirtWord, yourWord, friendsLetters) {
    if (shirtWord.length !== yourWord.length) {
      return true;
    }
  
    let knows = false;
    for (let i = 0; i < shirtWord.length; i++) {
      if (shirtWord[i] !== yourWord[i] && (friendsLetters.includes(shirtWord[i]) || friendsLetters.includes(yourWord[i]))) {
        knows = true;
      }
    }
    return knows;
  }
  
