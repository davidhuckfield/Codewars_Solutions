// link : https://www.codewars.com/kata/6444f6b558ed4813e8b70d43/train/javascript

function graph(arr) {
    let outerArray=[];
    let maxNumber = Math.max(...arr);
    for (let i=0; i<maxNumber;i++) {
      outerArray.push([]);
    }
    for (let i=outerArray.length-1; i>=0; i--) {
      let numberLabel=outerArray.length-i;
      outerArray[i].push("|" + numberLabel)
    }
    console.table(outerArray);
  }