// link : https://www.codewars.com/kata/56a3f08aa9a6cc9b75000023/train/javascript

function validateUsr(username) {
    let res = /^[a-z0-9_]{4,16}$/.test(username) 
    return res;
  }