// link : https://www.codewars.com/kata/56c5847f27be2c3db20009c3/train/javascript

function SubtractSum(n){
  
    let fruits = [
      'kiwi', 'pear', 'kiwi', 'banana', 'melon',
      'banana', 'melon', 'pineapple', 'apple', 'pineapple',
      'cucumber', 'pineapple', 'cucumber', 'orange', 'grape',
      'orange', 'grape', 'apple', 'grape', 'cherry',
      'pear', 'cherry', 'pear', 'kiwi', 'banana',
      'kiwi', 'apple', 'melon', 'banana', 'melon',
      'pineapple', 'melon', 'pineapple', 'cucumber', 'orange',
      'apple', 'orange', 'grape', 'orange', 'grape',
      'cherry', 'pear', 'cherry', 'pear', 'apple',
      'pear', 'kiwi', 'banana', 'kiwi', 'banana',
      'melon', 'pineapple', 'melon', 'apple', 'cucumber',
      'pineapple', 'cucumber', 'orange', 'cucumber', 'orange',
      'grape', 'cherry', 'apple', 'cherry', 'pear',
      'cherry', 'pear', 'kiwi', 'pear', 'kiwi', 'banana',
      'apple', 'banana', 'melon', 'pineapple', 'melon',
      'pineapple', 'cucumber', 'pineapple', 'cucumber', 'apple',
      'grape', 'orange', 'grape', 'cherry', 'grape',
      'cherry', 'pear', 'cherry', 'apple', 'kiwi',
      'banana', 'kiwi', 'banana', 'melon', 'banana',
      'melon', 'pineapple', 'apple', 'pineapple'
  ]
    
      function addDigits(number) {
      let numString = number.toString();
      let numArray = numString.split("");
      let digitsTotal = 0;
      for (let i=0; i<numArray.length; i++) {
        digitsTotal += parseInt(numArray[i]);
      }
      let returnNumber = number - digitsTotal;
      return returnNumber;
    }
    
      n = addDigits(n);
      if (n<=fruits.length) {return fruits[n-1]}
    
    while (n>100) {
      n = addDigits(n);
      if (n<=100) {return fruits[n-1]}
    }
    
  }