// link : https://www.codewars.com/kata/56576f82ab83ee8268000059

function spacey(array){
    let returnArray = [];
    for (let i=0; i<array.length; i++) {
      let currentString="";
      for (let y=0; y<=i; y++) {
        currentString+=array[y];
      }
      if (currentString.length>0) {returnArray.push(currentString);}
    }
    return returnArray;
  }