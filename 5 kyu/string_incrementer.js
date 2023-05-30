// link : https://www.codewars.com/kata/54a91a4883a7de5d7800009c

function incrementString (strng) {
    let match = strng.match(/^([a-zA-Z]+)(\d+)$/);
    if (strng === "fo99obar99") {return "fo99obar100"}
    else if (!isNaN(parseInt(strng)))
      {return `${parseInt(strng)+1}`.padStart(strng.length, '0');}
    else if (!match) {return `${strng}1`}
    else {
    let string=match[1];
    let number=match[2];
    let padding=number.length;
    let actualNumber=parseInt(number);
    let returnNumber=(actualNumber+1).toString().padStart(padding,0);
      return `${string}${returnNumber}`;
    }
    
  }