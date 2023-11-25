// link : https://www.codewars.com/kata/57cff961eca260b71900008f

function isVow(a){
    let vowels = ["a","e","i","o","u"]
    for (let i=0; i<a.length; i++) {
      if (vowels.includes(String.fromCharCode(a[i]))) {
        a[i] = String.fromCharCode(a[i]);
      }
    }
    return a;
  }