// link : https://www.codewars.com/kata/575fa9afee048b293e000287

function howMuchWater(water, load, clothes){
    let clothesAboveLoad = Math.max(clothes-load, 0);
    if (clothes > 2*load) {return "Too much clothes"}
    if (clothes < load) {return "Not enough clothes"}
    for (let i=0; i<clothesAboveLoad; i++) {
      water *= 1.1;
    }
    return parseFloat(water.toFixed(2));
  }