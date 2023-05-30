// link : https://www.codewars.com/kata/5467e4d82edf8bbf40000155

function descendingOrder(n){
    //convert to string
    let string = n.toString();
    //split the string into array
    let array = string.split("");
    //convert each entry back into a number
    for (let i = 0; i<array.length; i++) {array[i]=parseInt(array[i]);}
    //sort the array & reverse it
    array.sort();
    array.reverse();
    //join the array
    string = array.join("");
    return parseInt(string);
    
    //convert the concatenated string back to a number
  }