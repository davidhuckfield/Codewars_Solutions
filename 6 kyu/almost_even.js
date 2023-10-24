// link : https://www.codewars.com/kata/529e2e1f16cb0fcccb000a6b

var splitInteger = function(num, parts) {
    
    if (parts === 1) {
        return [num];
    }
    
    if (num < parts) {
        for (let i=0; i<num; i++) {
            returnArray.push(1);
        }
        for (let i=0; i<parts-num; i++) {
            returnArray.push(0);
        }
        return returnArray;
    }

    let returnArray = [];
    let baseNumber = Math.floor(num / parts);
    console.log(`baseNumber: ${baseNumber}`)

    for (let i=0; i<parts; i++) {
        returnArray.push(baseNumber);
    }
    console.log(`returnArray: ${returnArray}`)

    let moduloRemainder = num % parts;
    console.log(`moduloRemainder: ${moduloRemainder}`)
    
    if (moduloRemainder !== 0) {
    for (let i=0; i<moduloRemainder; i++) {
        returnArray[i] += 1;
    }
    }
    console.log(`returnArray: ${returnArray}`)
    return returnArray;
  }

    console.log(splitInteger(2, 2))