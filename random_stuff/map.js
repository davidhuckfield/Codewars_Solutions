

function mapTryout(...fruits) {
    let fruitMap = new Map();
    for (let i=0; i<fruits.length; i++) {
        fruitMap.set(i+1, fruits[i]);
    }
    console.log(`the first fruit is ${fruitMap.get(1)}`);
    console.log(`map has at least 5 fruits - ${fruitMap.has(5)}`)
    return fruitMap;
}

console.log(mapTryout("apple", "banana", "pear", "papaya", "guava"));