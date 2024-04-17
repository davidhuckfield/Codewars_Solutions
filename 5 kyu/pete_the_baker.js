// link : https://www.codewars.com/kata/525c65e51bf619685c000059/train/javascript

function cakes(recipe, available) {
    let cakesPerIngredient = {};
    for (let key in recipe) {
        if (available.hasOwnProperty(key)) {
            cakesPerIngredient[key] = Math.floor(available[key] / recipe[key]);
        } else {
            return 0;
        }
    }
    let numberOfCakes = Object.values(cakesPerIngredient);
    return Math.min(...numberOfCakes);
  }

  // 2
  console.log(cakes({flour: 500, sugar: 200, eggs: 1},{flour: 1200, sugar: 1200, eggs: 5, milk: 200}))