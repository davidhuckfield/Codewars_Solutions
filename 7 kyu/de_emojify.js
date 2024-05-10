// link : https://www.codewars.com/kata/6627696c86b953001280675e

function deEmojify(emojiString) {
    //emojis separated by single space
    //chains separated by double space
    //each emote chain is an ASCII character

    if (emojiString.length===0) {return "";}
  
    let emojis = [":)",":D",">(",">:C",":/",":|",":O",";)","^.^",":("];
    let characterCodes = [];
    let chains = emojiString.split("  ");

    for (let i=0; i<chains.length; i++) {
        let emojiDigits = chains[i].split(" ");
        let digits = emojiDigits.map(emoji => emojis.indexOf(emoji));
        let characterCode = digits.join("");
        characterCodes.push(characterCode);
    }

    let returnCharacters = characterCodes.map(code => String.fromCharCode(code));
    return returnCharacters.join("");
  }

  // "hi"
  console.log(deEmojify(":D :) :/  :D :) :|"))