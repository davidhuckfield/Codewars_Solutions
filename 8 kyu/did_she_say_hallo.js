// link : https://www.codewars.com/kata/56a4addbfd4a55694100001f/train/javascript

//first solution avoiding regex
// splits input into array, checks if each entry matches any of the greetings in the helloArray
// also checks if it matches the greetings without the last character (in case of punctuation)
//this is because the split splits by spaces, punctuation after the word will mean it doesn't match
// won't cover cases where punctuation comes before the word.

function validateHello(greetings) {
  let greetingsArray = greetings.split(" ");
  let helloArray = ["hello", "ciao", "salut", "hallo", "hola", "ahoj", "czesc"];
  for (let i=0; i<greetingsArray.length; i++) {
      if (helloArray.includes(greetingsArray[i].toLowerCase())
         || helloArray.includes(greetingsArray[i].toLowerCase().slice(0, greetingsArray[i].length-1))) {return true;}
  }
  return false;
}

//other solution using regex:

function validateHello(greetings) {
  return /h[ae]llo|ciao|salut|hola|ahoj|czesc/i.test(greetings);
}