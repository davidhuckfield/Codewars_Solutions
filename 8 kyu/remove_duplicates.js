// link : https://www.codewars.com/kata/57a5b0dfcf1fa526bb000118/train/javascript

function distinct(a) {
    const uniqueNumbers = [...new Set(a)];
    return uniqueNumbers;
  }