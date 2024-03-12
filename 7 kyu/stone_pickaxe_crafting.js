// link : https://www.codewars.com/kata/65c0161a2380ae78052e5731

function stonePick(arr) {
    let counts={};
    for (let i=0; i<arr.length; i++) {
      let value=arr[i];
      if (!counts[value]) {
        counts[value]=1
      }
      else {
        counts[value]++;
      }
    }
    let cobbleStone=0;
    cobbleStone += counts["Cobblestone"] || 0;
    let sticks=0;
    sticks += counts["Sticks"] || 0;
    sticks += (counts["Wood"]*4) || 0;
    
    return Math.floor(Math.min(cobbleStone/3,sticks/2));
  }