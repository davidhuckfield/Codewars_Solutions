// link : https://www.codewars.com/kata/54ff0d1f355cfd20e60001fc/train/javascript

function factorial(n)
{
  if (n===0 || n===1) {return 1;}
  if (n<0 || n>12) {throw new RangeError ("The number must be between 0 and 12");}
  let factorial=n;
  for (let i=n-1; i>0; i--) {
    factorial*=i;
  }
  return factorial;
}