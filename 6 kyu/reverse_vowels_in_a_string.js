// link : https://www.codewars.com/kata/585db3e8eec141ce9a00008f

//create array of vowels both upper and lower case 
// create empty array to store the vowels from the input string
//split the input string into an array, cycle through with for loop
//if current character is a vowel, unshift adds it to the beginning of the strVowels array without removing it 
//then the current value is changed to a placeholder character ("~")

//then second for loop goes through the modified array, and where there is a ~ it replaces it with the next value in the stored vowels array
//finally join the array back to a string and return it

function reverseVowels(str) {
    let strArray = str.split("");
    let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
    let strVowels = [];
    for(let i = 0; i < strArray.length; i++) {
      if(vowels.includes(strArray[i])){
        strVowels.unshift(strArray[i]);
        strArray[i] = "~";
      }
    }
    console.log(strVowels);
    for (let i = 0; i < strArray.length; i++) {
      if (strArray[i] === "~") {
        strArray[i] = strVowels[0];
        strVowels.shift();
      }
    }
    return strArray.join("");
  }