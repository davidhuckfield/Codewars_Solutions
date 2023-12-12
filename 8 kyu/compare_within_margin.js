// link : https://www.codewars.com/kata/56453a12fcee9a6c4700009c

function closeCompare(a, b, margin=0){
    if (margin >= Math.abs(a-b)) {return 0;}
    if (a<b) {return -1;}
    if (a>b) {return 1;}
  }