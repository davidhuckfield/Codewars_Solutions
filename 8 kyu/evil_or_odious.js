// link : https://www.codewars.com/kata/56fcfad9c7e1fa2472000034

//return Evil for numbers that have an even number of 1s in their binary representation, Odious for odd.
//first convert to binary with toString and base 2
//create a count by splitting the string at the character 1, and finding the length of the resulting array-1
//if modulo of the count into 2 is 0, it's even, if not it's odd.

function evil(n) {
    let binaryN = n.toString(2);
    let oneCount = binaryN.split("1").length-1;
    return oneCount%2===0 ? "It's Evil!" : "It's Odious!";
}