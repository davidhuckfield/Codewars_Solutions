// link : https://www.codewars.com/kata/66c79a67213a3a4e1486c364/train/javascript

function pyramid(stones) {
  if (stones.length===0) {return null;}
  console.log(stones);
  const frequency = {};
  let finalSum=0;
  stones.forEach(num => {
    if (frequency[num]) {
      frequency[num]++;
    }
    else {
      frequency[num] = 1;
    }
  });
  console.log(frequency);
  if (Object.keys(frequency).filter(key => frequency[key] >=3).length===0) {return null;}
  if (Object.keys(frequency).length <3) {return null;}
  for (let i=3; i>0; i--) {
    let x = i;
    let eligibleKeys = Object.keys(frequency).filter(key => frequency[key] >= x);
    console.log(`eligibleKeys is ${eligibleKeys}`);
    let eligibleNumbers = eligibleKeys.map(Number);
     console.log(`eligibleNumbers is ${eligibleNumbers}`);
    let largestNumber = Math.max(...eligibleNumbers);
     console.log(`largestNumber is ${largestNumber}`);
    finalSum += largestNumber*x;
     console.log(`finalSum is now ${finalSum}`);
    delete frequency[largestNumber];
  }
  if (finalSum === -Infinity) {return null;} else {
  return finalSum;}
}
