// link : https://www.codewars.com/kata/565f5825379664a26b00007c

function getSize(width, height, depth) {
    let area = (2*(width * height)) +(2*(height * depth)) + (2*(width * depth));
    let volume = width * height * depth;
    return [area, volume];
  }