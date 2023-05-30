// link : https://www.codewars.com/kata/523f5d21c841566fde000009

function arrayDiff(a, b) {
    let i = 0;
    while (i<a.length) {
      if (b.includes(a[i])) {
        a.splice(i, 1);
        continue;}
      i++;
    }
    return a;
  }