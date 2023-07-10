// link : https://www.codewars.com/kata/5875b200d520904a04000003/train/javascript

function enough(cap, on, wait) {
    let space = cap-on;
    if (space >=wait) {return 0;}
    else {return wait-space}
  }