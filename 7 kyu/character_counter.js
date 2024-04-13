// link : https://www.codewars.com/kata/56786a687e9a88d1cf00005d

function validateWord(s)
{
  let splitWord = s.split("");
  for (let i=0; i<splitWord.length; i++) {
    splitWord[i]=splitWord[i].toLowerCase();
  }
  let counts={};

  splitWord.forEach((item) => {
  if (!counts[item]) {
    counts[item]=1;
  }
  else {counts[item]++;}
})

let countNumbers = Object.values(counts);
if (countNumbers.every(value => value===countNumbers[0])) {
    return true;
}
else {
    return false;
}

}

//true
console.log(validateWord("abcabc"));

//false
console.log(validateWord("abcabcd"));

//false
console.log(validateWord("Abcabc"));

