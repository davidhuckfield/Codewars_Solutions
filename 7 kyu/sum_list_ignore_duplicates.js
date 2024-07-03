// link : https://www.codewars.com/kata/5993fb6c4f5d9f770c0000f2/train/javascript

function sumNoDuplicates(numList) {
    const countMap = new Map();
    
    numList.forEach(num => {
      countMap.set(num, (countMap.get(num) || 0) + 1);
    });
  
    const sum = numList.reduce((acc, num) => {
      if (countMap.get(num) === 1) {
        return acc + num;
      }
      return acc;
    }, 0);
  
    return sum;
  }