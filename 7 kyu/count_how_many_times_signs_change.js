// link : https://www.codewars.com/kata/5bbb8887484fcd36fb0020ca

function catchSignChange(arr) {
    //create variable to store if current value is +/-
    let posneg;
    //setup the initial value of posneg
    //if the absolute value of the number is the same as the number, it's positive
    if (Math.abs(arr[0])===arr[0]) {
      posneg="pos"
    }
    //if not, it's negative
    else {posneg="neg"}
    //set up variable to store total changes
    let totalChanges=0;
    for (let i=1; i<arr.length; i++) {
      //if positive
      if (Math.abs(arr[i])===arr[i]) {
        //toggle posneg, add 1 to total changes
        if (posneg==="neg") {
          posneg="pos";
          totalChanges++;
        }
      }
      //else negative
      else {
        //toggle posneg, add 1 to total changes
        if (posneg==="pos") {
          posneg="neg";
          totalChanges++;
        }
      }
    }
    return totalChanges;
  }