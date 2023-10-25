// link : https://www.codewars.com/kata/57238766214e4b04b8000011

function changeMe(moneyIn){
    let acceptedDenominations = ["£5", "£2", "£1", "50p", "20p"];
  if (!acceptedDenominations.includes(moneyIn)) {
    return moneyIn;
  }
  if (moneyIn === "20p") {
    return "10p 10p";
  }
    let penceIn = 0;
    let moneyNumber = moneyIn.match(/\d+/)[0];
    if (moneyIn.charAt(0) === '£') {
      penceIn = moneyNumber * 100;
    }
    else {
      penceIn = moneyNumber;
    }
    let numberOf20ps = Math.floor(penceIn / 20);
    let numberOf10ps = (penceIn % 20)/10;

    let arrayOf20ps = new Array(numberOf20ps).fill("20p");
    let arrayOf10ps = new Array(numberOf10ps).fill("10p");
    let combinedArray = arrayOf20ps.concat(arrayOf10ps);

    return combinedArray.join(" ");
  }

  console.log(changeMe('20p'));