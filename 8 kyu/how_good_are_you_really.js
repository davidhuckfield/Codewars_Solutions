// link : https://www.codewars.com/kata/5601409514fc93442500010b

function betterThanAverage(classPoints, yourPoints) {
    let total=0;
    for (let i=0; i<classPoints.length; i++)
      {total+=classPoints[i];}
    let average=total/classPoints.length
    if (yourPoints>average) {return true;}
    else {return false;}
  }