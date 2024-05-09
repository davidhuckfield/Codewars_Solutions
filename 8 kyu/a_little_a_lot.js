// link : https://www.codewars.com/kata/57f24e6a18e9fad8eb000296

function howMuchILoveYou(nbPetals) {
    let phrases = [ "I love you",
                    "a little",
                    "a lot",
                    "passionately",
                    "madly",
                    "not at all"];
  let number = (nbPetals - 1) % phrases.length;
  return phrases[number];
}
