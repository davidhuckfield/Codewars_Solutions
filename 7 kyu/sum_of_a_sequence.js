// link : https://www.codewars.com/kata/586f6741c66d18c22800010a/train/javascript

const sequenceSum = (begin, end, step) => {
  console.log(begin, end, step);
  let sum = 0;
  for (let i=begin; i<=end; i+=step) {
    sum += i;
  }
  return sum;
};
