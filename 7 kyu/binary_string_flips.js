// link : https://www.codewars.com/kata/58c218efd8d3cad11c0000ef/train/javascript

function binStr(s) {
    let count = 0;
    let splitString = s.split("");
    for (let i=0; i<splitString.length; i++) {
        if (splitString[i]==="1") {
            splitString[i]="0";
            for (let y=i+1; y<splitString.length; y++) {
                if (splitString[y]==="1") {splitString[y]="0"}
                else {splitString[y]="1"}
            }
            count++;
        }
    }
    
    return count;
    
  }

  console.log(binStr("0101"));