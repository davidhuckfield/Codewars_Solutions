// link : https://www.codewars.com/kata/65f361be2b30ec19b78d758f

function frogContest(n) {
    let chrisTotal=0;
    for (let i=1; i<=n; i++) {
      chrisTotal+=i;
    }
    let tomTotal=0;
    for (let i=1; i<=Math.floor(chrisTotal/2); i++) {
      tomTotal+=i;
    }
    let catTotal=0;
    for (let i=1; i<=(chrisTotal+tomTotal); i++) {
      catTotal+=i;
    }
    let returnString = `Chris ate ${chrisTotal} flies, Tom ate ${tomTotal} flies and Cat ate ${catTotal} flies`;
    return returnString;
  }