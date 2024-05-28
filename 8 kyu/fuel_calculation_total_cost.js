// link : https://www.codewars.com/kata/57b58827d2a31c57720012e8

function fuelPrice(litres, pricePerLitre) {
  
    let discount = Math.min(Math.floor(litres / 2) * 5, 25);
    
    let newPricePerLitre = pricePerLitre - (discount / 100);
    
    let totalPrice = litres * newPricePerLitre;
    
    return parseFloat(totalPrice.toFixed(2));
  }