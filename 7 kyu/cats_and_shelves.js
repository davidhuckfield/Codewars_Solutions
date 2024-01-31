// link : https://www.codewars.com/kata/62c93765cef6f10030dfa92b

function solution(start, finish) {
    //if only one shelf, no jumps needed
  if (start === finish) {
    return 0;
  }
  //problem says start will never exceed finish but this checks for it anyway
  if (start > finish) {
    return "Invalid input - start must be lower than finish";
  }
  //calculate distance from start to finish
  let distance = finish-start;
  //create variable to store number of jumps for readability
  let jumps = 0;
  //if distance is divisible by 3, divide distance by 3 for number of jumps
  if (distance % 3 === 0) {
    jumps = distance / 3;
  }
  //if not divisible by 3, calculate the number of +3 jumps by removing the remainder
  //then add the number of remaining +1 jumps (the remainder)
  else {
    jumps += (distance - (distance % 3))/3;
    jumps += (distance%3);
  }
  return jumps;
}

//expected answer 2
console.log(solution(1,5))