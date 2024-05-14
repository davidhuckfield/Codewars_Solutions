function tenGreenBottles(n) {
   if (n>9999999) {return "number too large!"}
    let returnString = "";

    function numberToText (number) {
        let onesWords = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
        let tensWords = ["ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
        let teensWords = ["eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    
        let returnString = "";
    
        let millions = Math.floor(number / 1000000) % 10;
        let hundredThousands = Math.floor(number / 100000) % 10;
        let tenThousands = Math.floor(number / 10000) % 10;
        let thousands = Math.floor(number / 1000) % 10;
        let hundreds = Math.floor(number / 100) % 10;
        let tens = Math.floor(number / 10) % 10;
        let ones = number % 10;
        // console.log(`array is ${[millions, hundredThousands, tenThousands,thousands, hundreds, tens, ones]}`);
    
        if (millions) {returnString += `${onesWords[millions-1]} million `;}
    
        if (hundredThousands) {
                returnString += `${onesWords[hundredThousands-1]} hundred ${tenThousands || thousands ? "and " : "hundred thousand"}`;
        }
    
        let teenThousands = parseInt(tenThousands.toString() + thousands.toString());
        // console.log(`teenThousands is ${teenThousands}`);
        // console.log(`teenThousands meets 11 criteria? ${teenThousands >=11}`);
        // console.log(`teenThousands meets 19 criteria? ${teenThousands <=19}`);
        if (teenThousands >=11 && teenThousands <=19) {
            returnString += `${teensWords[teenThousands-11]} thousand `
        }
        else {
        if (tenThousands) {
                    returnString += `${tensWords[tenThousands-1]} ${thousands ? "" : "thousand "}`;
        }
        if (thousands) {
                    returnString += `${onesWords[thousands-1]} thousand `;
        }
        }
            
        
        
    
        if (hundreds) {
            returnString += `${onesWords[hundreds-1]} hundred${tens || ones ? " and " : ""}`;
            }
    
        let teens = parseInt(tens.toString() + ones.toString());
        if (teens >=11 && teens <=19) {
            returnString += `${teensWords[teens-11]}`
        }
        else {
        if (tens) {
            returnString += `${tensWords[tens-1]}`;
        }
        if (ones) {
            returnString += `${onesWords[ones-1]}`;
        }
        }
        
        return returnString;
    
        
    }

    for (let i=n; i>=1; i--) {
        console.log(i);
        console.log(numberToText(i));
        let currentNumberText = numberToText(i).charAt(0).toUpperCase() + numberToText(i).substring(1);
        console.log(`current number text is ${currentNumberText}`);
        let nextNumberText;
        if (i===1) {
            nextNumberText = "no";
        }
        else {
        nextNumberText = numberToText(i-1).charAt(0).toUpperCase() +numberToText(i-1).substring(1);
        }
        console.log(`next number text is ${nextNumberText}`);
        returnString += `${currentNumberText} green bottle${currentNumberText==="One" ? "" : "s"} hanging on the wall,\n`;
        returnString += `${currentNumberText} green bottle${currentNumberText==="One" ? "" : "s"} hanging on the wall,\n`;
        returnString += `${currentNumberText==="One" ? "If that" : "And if"} one green bottle should accidentally fall,\n`;
        returnString += `There'll be ${nextNumberText.toLowerCase()} green bottle${nextNumberText.toLowerCase()==="one" ? "" : "s"} hanging on the wall.\n${currentNumberText==="One" ? "" : "\n"}`;

    }
    return returnString;
  }  

  

console.log(tenGreenBottles(20));



