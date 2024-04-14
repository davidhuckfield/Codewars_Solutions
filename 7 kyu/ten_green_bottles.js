// link : https://www.codewars.com/kata/5838e2978bbc04b7cd000008

function tenGreenBottles(n) {
    let numbers = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];
    let returnString = "";

    for (let i=n-1; i>=0; i--) {
        console.log(i);
        console.log(numbers[i]);
        let currentNumberText = numbers[i].charAt(0).toUpperCase() + numbers[i].substring(1);
        let nextNumberText;
        if (i===0) {
            nextNumberText = "no";
        }
        else {
        nextNumberText = numbers[i-1];
        }
        returnString += `${currentNumberText} green bottle${currentNumberText==="One" ? "" : "s"} hanging on the wall,\n`;
        returnString += `${currentNumberText} green bottle${currentNumberText==="One" ? "" : "s"} hanging on the wall,\n`;
        returnString += `${currentNumberText==="One" ? "If that" : "And if"} one green bottle should accidentally fall,\n`;
        returnString += `There'll be ${nextNumberText} green bottle${nextNumberText==="one" ? "" : "s"} hanging on the wall.\n${currentNumberText==="One" ? "" : "\n"}`;

    }
    return returnString;
  }  



console.log(tenGreenBottles(10));



