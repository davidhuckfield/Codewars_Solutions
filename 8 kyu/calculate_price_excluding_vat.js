// link : https://www.codewars.com/kata/5890d8bc9f0f422cf200006b

//divide by 1.15 to get the price without vat
//round to 2 decimal places
//return the result
//if input is null, return -1

function excludingVatPrice(price){
    if (price === null) {return -1} 
    let priceExc = (price / 1.15).toFixed(2);
      return parseFloat(priceExc);
  
  }