// link : https://www.codewars.com/kata/52af0d380fcae83a560008af/train/javascript

function giftHandler() {
    const giftList = new Set();
  return function handOutGift(name) {
   if (giftList.has(name)) {
     throw new Error("This child has already received a gift");
   }
    giftList.add(name);
    console.log(`Gift given to ${name}`);
    
  }}
  const handOutGift = giftHandler();