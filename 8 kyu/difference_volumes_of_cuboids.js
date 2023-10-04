// link : https://www.codewars.com/kata/58cb43f4256836ed95000f97

function findDifference(a, b) {
    //reduce both arrays by multiplying together to find the volume
    //deduct the smaller (Math.min) from the larger (Math.max)
    return Math.max(a.reduce((acc, curr) => acc * curr), b.reduce((acc, curr) => acc * curr)) 
      - 
      Math.min(a.reduce((acc, curr) => acc * curr), b.reduce((acc, curr) => acc * curr))
  }