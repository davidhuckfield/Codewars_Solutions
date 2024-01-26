// link : https://www.codewars.com/kata/569b5cec755dd3534d00000f

//find the value of the next donation that would make the average 30 (or specified input)
//if total divided by number of donations = 30, total + x = number of donations x 30

function newAvg(arr, newavg) {
    //eventual number of donations will be the existing ones, plus the next one
    let numberOfDonations = arr.length+1;
    //the amount he wants to reach is the number of donations x target average, thereby making the target average the avg. donation
    let totalTargetAmount = numberOfDonations * newavg;
    //the existing total of donation money is the sum of the array numbers
    let existingTotal = arr.reduce((acc, curr) => acc + curr, 0);
    //his next target donation is the target amount minus the current amount
    let nextTargetDonation = totalTargetAmount - existingTotal;
    //handle the potential error of the next target donation being 0 or negative
  if (nextTargetDonation<=0) {
    throw new Error("Expected New Average is too low");
  }
  //round up to the nearest integer
    return Math.ceil(nextTargetDonation);
}

console.log(newAvg([14,30,5,7,9,11,15]));