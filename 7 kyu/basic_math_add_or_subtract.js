// link : https://www.codewars.com/kata/5809b62808ad92e31b000031/train/javascript

function calculate(str) {
    //replace plus with +, minus with -
    let expression = str.replace(/plus/g, '+').replace(/minus/g, '-');
    //check if the expression contains only numbers or +/- to ensure no other code can be inserted
    if (/^[0-9+-]+$/.test(expression)) {
            //eval evaluates the equation and then task requires that it be returned as a string
            return eval(expression).toString();
        } else {
           return "Invalid input";
        }
    }