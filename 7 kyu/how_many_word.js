// link : https://www.codewars.com/kata/56eff1e64794404a720002d2/train/javascript

function testit(s) {
  let word = "word";
  let currentPosition = 0;
  let wordCount = 0;
  for (let i=0; i<s.length; i++) {
    if (s[i].toLowerCase()===word[currentPosition]) {
      if (currentPosition===3) {
        wordCount++;
        currentPosition=0;
      }
      else {
        currentPosition++;
      }
    }
  }
    return wordCount;
}