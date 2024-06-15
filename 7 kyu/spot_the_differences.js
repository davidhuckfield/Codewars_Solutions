// link : https://www.codewars.com/kata/5881460c780e0dd207000084

function spot(s1,s2){
    let differencePositions = [];
    for (let i=0; i<s1.length; i++) {
      if (s1[i]!=s2[i]) {
        differencePositions.push(i);
      }
    }
    return differencePositions;
  }