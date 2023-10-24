// link : https://www.codewars.com/kata/55a3cb91d1c9ecaa2900001b

function strongEnough(earthquake, age) {
    let magnitude = 1;
    for (let i=0; i<earthquake.length; i++) {
      let shockwave = 0;
      for (let y=0; y<earthquake[i].length; y++) {
        shockwave+= earthquake[i][y];
      }
      magnitude *= shockwave;
    }
    
    let buildingStrength = 1000;

    for (let i=0; i<age; i++) {
        buildingStrength *= 0.99;
        }   
   
    if (magnitude < buildingStrength) {
        return "Safe!";
    }
    else {
        return "Needs Reinforcement!";
    }

  }

  console.log(strongEnough([[2,3,1],[3,1,1],[1,1,2]], 2))