// link : https://www.codewars.com/kata/57f781872e3d8ca2a000007e

// solution 1

function maps(x){
    let y = x.map(element => element*2)
    return y;
  }

// solution 2

function maps(x){
    let xxx = []
    for (let i = 0; i < x.length; i++){
      xxx[i] = x[i] * 2
    }
  return xxx
  }