// link : https://www.codewars.com/kata/5d376cdc9bcee7001fcb84c0

function oddOnesOut(nums) {
    //create empty object to store counts
    let counts = {};
    
    //loop to check each value in nums array
    for (let value of nums) {
        //if count already exists for this value, increment by 1
        if (counts[value]) {
            counts[value] +=1;
        //if not, create first count at 1
        } else {
            counts[value]=1;
        }
    }

    //create new array by filtering the original input array, leaving only those where the remainder from dividing by 2 is 0 (even)
    let evenNumbers = nums.filter( value => counts[value] % 2 === 0);
    
    //return the filtered array
    return evenNumbers;
  }

  console.log(oddOnesOut([1,2,3,1,3,3]));