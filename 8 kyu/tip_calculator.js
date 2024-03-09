// link : https://www.codewars.com/kata/56598d8076ee7a0759000087

function calculateTip(amount, rating) {
    console.log(amount, rating);
    if (rating.toLowerCase()==="terrible") {return 0;}
    if (rating.toLowerCase()==="poor") {return Math.ceil(amount*0.05);}
    if (rating.toLowerCase()==="good") {return Math.ceil(amount*0.10);}
      if (rating.toLowerCase()==="great") {return Math.ceil(amount*0.15);}
      if (rating.toLowerCase()==="excellent") {return Math.ceil(amount*0.20);}
    else {return "Rating not recognised"}
  }