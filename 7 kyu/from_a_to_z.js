// link : https://www.codewars.com/kata/6512b3775bf8500baea77663

function gimmeTheLetters(sp) {
    
    const [firstLetter, lastLetter] = sp.split("-");
    const firstLetterCode = firstLetter.charCodeAt(0);
    const lastLetterCode = lastLetter.charCodeAt(0);
    let returnLettersArray=[];

    for (let i=firstLetterCode; i<=lastLetterCode; i++) {
        returnLettersArray.push(String.fromCharCode(i));
    }

    return returnLettersArray.join("");

  }

  console.log(gimmeTheLetters("J-J"));

  console.log(gimmeTheLetters("a-z"));