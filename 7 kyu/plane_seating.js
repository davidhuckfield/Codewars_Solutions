// link : https://www.codewars.com/kata/57e8f757085f7c7d6300009a

function planeSeat(a){
    let letter=a.substring(a.length-1);
    let number=a.substring(0,a.length-1);
    
    let left=["A","B","C"];
    let middle=["D","E","F"];
    let right=["G","H","K"];
    
    let returnString="";
    
    if (number >=1 && number <=20) {returnString+="Front-"}
    else if (number >=21 && number <=40) {returnString+="Middle-"}
    else if (number >40 && number <=60) {returnString+="Back-"}
    else {return "No Seat!!"}
    
    if (left.includes(letter)) {returnString+="Left"}
    else if (middle.includes(letter)) {returnString+="Middle"}
    else if (right.includes(letter)) {returnString+="Right"}
    else {return "No Seat!!"}
    
    return returnString;

}