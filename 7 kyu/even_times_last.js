// link : https://www.codewars.com/kata/5a1a9e5032b8b98477000004

function evenLast(numbers) {
    if (numbers.length===0) {return 0;}
    let sumEven = 0;
    for (let i=0; i<numbers.length; i++) {
      if (i%2===0) {
        sumEven+=numbers[i];
      }
    }
    return (sumEven * numbers[numbers.length-1]);
  }