// link : https://www.codewars.com/kata/559f860f8c0d6c7784000119

function anyArrows(arrows){
    arrows = arrows.filter(arrow => !('damaged' in arrow) || arrow.damaged === false);
    return arrows.length>0;
    }

  console.log(anyArrows([{ range: 5}]));