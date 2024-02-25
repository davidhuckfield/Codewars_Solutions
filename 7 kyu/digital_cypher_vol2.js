// link : https://www.codewars.com/kata/592edfda5be407b9640000b2

function decode  (code, n) {

    //create empty array to store processed numbers minus the key digits
    let processedNumbers = [];
    //split the key to easily access the digits
    let splitKey = n.toString().split("");
    //start a current key digit variable to track which digit to deduct and increment each time
    let currentKeyDigit = 0;

    //loop through the code numbers, deduct the current key digit each time to reverse how it was encoded by adding them
    for (let i=0; i<code.length; i++) {
        //current code number, minus the current digit from the key, push it to the results array
        processedNumbers.push(code[i]-splitKey[currentKeyDigit]);
        //increment the current key digit to go on to the next one
        currentKeyDigit++;
        //if the current key digit exceeds the length of the key, circle back to the first digit
        if (currentKeyDigit>=splitKey.length) {
            currentKeyDigit=0;
        }
    }
    
    //create empty array to store the decoded letters
    let letters = [];

    //loop through the code numbers and get the corresponding characters
    for (let i=0; i<processedNumbers.length; i++) {
        //lowercase a is character 97, so for 1 to correspond to a, add 96.
        //push the resulting character to the letters array
        letters.push(String.fromCharCode(processedNumbers[i]+96))
    }

    //join the letters array into a string and return it
    return letters.join("");
}

// "scout"
console.log(decode([ 20, 12, 18, 30, 21], 1939));

// "masterpiece"
console.log(decode([ 14, 10, 22, 29, 6, 27, 19, 18, 6, 12, 8], 1939));

// "ppdakaaszbad"
console.log(decode([18, 18,  6,  3, 13, 3,  3, 21, 28,  4, 3,  6], 2));