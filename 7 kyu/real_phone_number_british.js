// link : https://www.codewars.com/kata/581a52d305fe7756720002eb

function validateNumber(str){

    let splitString = str.split("");

    let filteredSplitString = splitString.filter(function (character){
        return character !== "-";
    });

    let recombinedString = filteredSplitString.join("");
    if ((recombinedString.substring(0,2)==="07" && recombinedString.length===11) || (recombinedString.substring(0,4)==="+447") && recombinedString.length===13) {
        return "In with a chance";
    }
    else {return "Plenty more fish in the sea";}
    }

    console.log(validateNumber("0745-487-6120"));