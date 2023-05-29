// link : https://www.codewars.com/kata/576757b1df89ecf5bd00073b

//create empty array to store results
//length of each line will be number of floors minus 1, times 2, +1
//e.g with 4 floors, top is 1 star, second is 3, third is 5, fourth is 7.
//each string will be same length, with spaces padding the stars to the full length.
//number of stars is current "floor" number * 2 + 1
//number of spaces is the length - number of stars 
//repeat number of spaces/2 on one side, then stars, then remaining spaces.
//push to array

function towerBuilder(nFloors) {
    let towerArray = [];
    let length = ((nFloors - 1) * 2)+1
    for (let i=0; i<nFloors; i++) {
      let stars = i*2+1; 
      let spaces = length-stars;
      let currentString = " ".repeat(spaces/2) + "*".repeat(stars) +" ".repeat(spaces/2);
      towerArray.push(currentString);
    }
  return towerArray;
  }