// link : https://www.codewars.com/kata/5aa736a455f906981800360d

function feast(beast, dish) {
    //your function here
      // check first and last letter of beasts name
      // check first and last letter of the dish
      // compare if they are the same
      // return true if they are false if not
      let firstLetterBeast = beast.charAt(0)
      let lastLetterBeast = beast.charAt(beast.length-1)
      let firstLetterDish = dish.charAt(0)
      let lastLetterDish = dish.charAt(dish.length-1)
      
      return firstLetterBeast === firstLetterDish && lastLetterBeast === lastLetterDish
       
    }