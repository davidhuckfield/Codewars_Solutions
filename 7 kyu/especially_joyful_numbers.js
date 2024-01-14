// link : https://www.codewars.com/kata/570523c146edc287a50014b1

function numberJoy(n) {
    let splitNumber = Math.abs(n).toString().split("").map(Number);
    console.log(splitNumber);
    let sum = splitNumber.reduce((acc, num) => acc+num, 0);
    console.log(sum);
    let reverseSum = parseInt(sum.toString().split("").reverse().join(""));
    console.log(reverseSum);
    if (sum * reverseSum === n) {
        return true;
    }
    else {
        return false;
    }
}

//true
console.log(numberJoy(1729));
//false 
console.log(numberJoy(1997));