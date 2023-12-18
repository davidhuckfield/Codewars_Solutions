// link : https://www.codewars.com/kata/58545549b45c01ccab00058c

function calculate_total(subtotal, tax, tip) {
    let taxAmount = subtotal * (tax/100);
    let tipAmount = subtotal * (tip/100);
    let finalTotal = subtotal + taxAmount + tipAmount;
    return parseFloat(finalTotal.toFixed(2));
  }