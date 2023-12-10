// link : https://www.codewars.com/kata/563cf89eb4747c5fb100001b

function removeSmallest(numbers) {
    let newArray = [...numbers];
    let smallest = Math.min(...newArray);
    for (let i=0; i<newArray.length; i++) {
      if (newArray[i]===smallest) {
        newArray.splice(i,1);
        break;
      }
    }
    return newArray;
  }