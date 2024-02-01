// link : https://www.codewars.com/kata/56a1c074f87bc2201200002e/train/javascript

function smaller(nums) {
    let returnArray=[];
    for (let i=0; i<nums.length; i++) {
      let count=0;
      for (let y=i+1; y<nums.length; y++) {
        if (nums[y] < nums[i]) {
          count++;
        }
      }
      returnArray.push(count);
    }
    return returnArray;
  }