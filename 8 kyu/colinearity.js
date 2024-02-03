// link : https://www.codewars.com/kata/65ba420888906c1f86e1e680/train/javascript

function collinearity( x1,y1, x2,y2 ) {
    if(x1+y1===0 || x2+y2===0) {return true;}
    let slope1 = y1/x1;
    let slope2 = y2/x2;
    if (slope1===slope2) {return true;}
    else {return false;}
  }

  console.log(collinearity(1,1,1,1,));