// link : https://www.codewars.com/kata/58999425006ee3f97c00011f

function passed (list) { 

    let total = 0;
    let students = 0;
    
    for (let i=0; i<list.length; i++) {
      if (list[i]<=18) {
        total += list[i];
        students++;
      }
    }
    if (total===0 || students===0) {
      return "No pass scores registered."
    }
    else {
    return Math.round(total/students);
  }
  } 