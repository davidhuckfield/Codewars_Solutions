// link : https://www.codewars.com/kata/5526fc09a1bbd946250002dc

function findOutlier(integers){
    let oddQty = 0;
    let evenQty = 0;
    let oddNumber;
    let evenNumber;
    for (let i=0; i<integers.length; i++) {
      if (integers[i] % 2 === 0) {
        evenQty ++;
        evenNumber = integers[i];
      }
      else {
        oddQty++;
        oddNumber = integers[i];
      }
    }
    if (evenQty > oddQty) {return oddNumber;}
    else {return evenNumber;}
}