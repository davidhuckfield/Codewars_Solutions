// link : https://www.codewars.com/kata/5bc73331797b005d18000255

function drawSpider(legSize, bodySize, mouth, eye) {
    let legs = ["^ ^", "/\\ /\\", "/\u2572 \u2571\\", "\u2571\u2572 \u2571\u2572"];
    let numberOfEyes = Math.pow(2, bodySize);
    let middle = "(".repeat(bodySize) + eye.repeat(numberOfEyes/2) + mouth + eye.repeat(numberOfEyes/2) + ")".repeat(bodySize);
    let returnString = legs[legSize-1].replace(" ", middle);
    return returnString;
  }