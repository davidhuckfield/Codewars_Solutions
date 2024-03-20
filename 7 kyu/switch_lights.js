// link : https://www.codewars.com/kata/5888145122fe8620950000f0

function switchLights(a) {
    for (let i=0; i<a.length; i++) {
      if (a[i]===1) {
        for (let y=0; y<=i; y++) {
          if (a[y]===1) {a[y]=0} else {a[y]=1}
        }
      }
    }
    
    
    return a;
  }