// link : https://www.codewars.com/kata/5a6d3bd238f80014a2000187

var ownedCatAndDog = function(catYears, dogYears) {
    let ownedCat;
    let ownedDog;
    if (catYears<=15) {
        ownedCat++;
    }
    if (dogYears<=15) {
        ownedDog++;
    }
    let remainderCat = catYears-15;
    let remainderDog = dogYears-15;

    if (remainderCat>=9) {
        ownedCat++;
    }
    if (remainderDog>=9) {
        ownedDog++;
    }

    remainderCat-=9;
    remainderDog-=9;

    if (remainderCat>0) {
        ownedCat+=(Math.floor(remainderCat/4));
    }
    if (remainderDog>0) {
        ownedCat+=(Math.floor(remainderCat/5));
    }



    return [ownedCat,ownedDog];
  }

  // 1, 1
  console.log(ownedCatAndDog(15,15));

  // 10, 10
  console.log(ownedCatAndDog(56,64));