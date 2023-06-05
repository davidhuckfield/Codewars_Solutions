// link : https://www.codewars.com/kata/56606694ec01347ce800001b

function isTriangle(a,b,c) {
    let sides = [a,b,c];
   sides.sort((a,b) => a-b);
   if (sides[0] + sides[1] > sides[2]) {return true;}
   else {return false;}
 }