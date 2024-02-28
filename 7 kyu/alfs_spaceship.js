// link : https://www.codewars.com/kata/5660aa3d5e011dfd6e000063/train/javascript

function findSpaceship(map) {
    if (!map) {return "Spaceship lost forever."}
      let findLength=map.split("\n");
      let y=findLength.length-1;
      let x=0;
      let splitMap = map.split("");
      
      for (let i=0; i<splitMap.length; i++) {
          if (splitMap[i]===".") {
              x++;
          }
          else if (splitMap[i]==="\n") {
              y--;
              x=0;
          }
          else if (splitMap[i]==="X") {return [x,y];}
      }
    return "Spaceship lost forever.";
    }

  // [7, 2]
console.log(findSpaceship("..........\n..........\n..........\n.......X..\n..........\n.........."))



/*

..........\n
..........\n
..........\n
.......X..\n
..........\n
..........\n

*/