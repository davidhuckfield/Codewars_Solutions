// link : https://www.codewars.com/kata/643af0fa9fa6c406b47c5399

function quadrant(x, y) {
  if (x>0) {
    if (y>0) {return 1;}
    else {return 4;}
    }
  else {
    if (y>0) {return 2;}
    else {return 3;}
  }
}