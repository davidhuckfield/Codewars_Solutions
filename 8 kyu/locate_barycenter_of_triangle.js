// link : https://www.codewars.com/kata/5601c5f6ba804403c7000004

function barTriang(p1, p2, p3){
    let x = parseFloat(((p1[0]+p2[0]+p3[0])/3).toFixed(4));
    let y = parseFloat(((p1[1]+p2[1]+p3[1])/3).toFixed(4));
    
    return [x,y];
  }