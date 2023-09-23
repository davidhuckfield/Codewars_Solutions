// link : https://www.codewars.com/kata/6444f6b558ed4813e8b70d43/train/javascript

function graph(arr) {
    let outerArray=[];
    let maxNumber = Math.max(...arr);
    for (let i=0; i<=maxNumber;i++) {
      outerArray.push([]);
    }
    
  for (let i=0; i<outerArray.length; i++) {
    let currentXValue = outerArray.length-i-1;
    for (let y=0; y<arr.length; y++) {
      if (arr[y]===currentXValue) {
        outerArray[i].push(" ____ ");
      }
      else if (arr[y]>currentXValue) {
        outerArray[i].push("|    |");
      }
      else {
        outerArray[i].push("......");
      }
    }
  }

  for (let i=outerArray.length-1; i>=0; i--) {
    let numberLabel=outerArray.length-i-1;
    if (i===0) {
      outerArray[i].push(" ^ " + numberLabel);
    } else {
    outerArray[i].push(" | " + numberLabel)
  }
}

    // console.table(outerArray);

let joinedArray = outerArray.map(x=>x.join("")).join("\n");

// console.log(joinedArray);
return joinedArray;
}
  graph([10,5,3,1,4]);