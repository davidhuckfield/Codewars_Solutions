// link : https://www.codewars.com/kata/584d2c19766c2b2f6a00004f

const or = (a, b) => {
    if (a) {return true;}
    if (b) {return true;}
    return false;
  };
  
  const xor = (a, b) => {
    if (a) {
      if (!b) {return true;}
    }
    if (b) {
      if (!a) {return true;}
    }
    return false;
  };