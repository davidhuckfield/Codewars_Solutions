// link : https://www.codewars.com/kata/5a34b80155519e1a00000009

function multipleOfIndex(array) {
    let newArray = [];
    for (let i=0; i<array.length; i++) {
      if (array[i]%i===0) {newArray.push(array[i]);}
    }
    return newArray;
  }