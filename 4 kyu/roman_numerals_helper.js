//link : https://www.codewars.com/kata/51b66044bce5799a7f000003

class RomanNumerals {
    static toRoman(num) {
      const romanNumerals = [
      { value: 1000, symbol: 'M' },
      { value: 900, symbol: 'CM' },
      { value: 500, symbol: 'D' },
      { value: 400, symbol: 'CD' },
      { value: 100, symbol: 'C' },
      { value: 90, symbol: 'XC' },
      { value: 50, symbol: 'L' },
      { value: 40, symbol: 'XL' },
      { value: 10, symbol: 'X' },
      { value: 9, symbol: 'IX' },
      { value: 5, symbol: 'V' },
      { value: 4, symbol: 'IV' },
      { value: 1, symbol: 'I' }
    ];
  //edge case - if number is 0, return empty string
  if (num === 0) {return "";}
  
  //set up variable to hold Roman numeral
  let result = "";
  
  for (const numeral of romanNumerals) {
  //while the input is >= the current numeral in the romanNumerals array, add the symbol to the result, and deduct the value from the input num
      while (num >= numeral.value) {
          result += numeral.symbol;
          num -= numeral.value;
      }
  }
  return result;
    }
  
    static fromRoman(str) {
      const romanNumerals = new Map ([
          ["I", 1],
           ["V", 5],
            ["X", 10],
             ["L", 50],
              ["C", 100],
               ["D", 500],
                ["M", 1000],
      ]
      );
      let result = 0;
      for (let i=0; i<str.length; i++) {
          let currentValue = romanNumerals.get(str[i]);
          let nextValue = romanNumerals.get(str[i+1]);
  
          if (nextValue && nextValue > currentValue) {
              result += nextValue - currentValue;
              i++;}
              else {result += currentValue;}
          }
      return result;
    }
  }