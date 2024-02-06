// link : https://www.codewars.com/kata/59f11118a5e129e591000134

function repeats(arr){
    const counts = new Map();
    arr.forEach(num => {
        counts.set(num, (counts.get(num) || 0) +1);
    })
    let singles = arr.filter(num => counts.get(num) === 1);
    return singles.reduce((acc, curr) => acc + curr, 0);
    };