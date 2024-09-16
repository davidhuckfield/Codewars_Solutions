// link : https://www.codewars.com/kata/56a921fa8c5167d8e7000053/train/javascript

function password(str) {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(str);
  }