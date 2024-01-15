// link : https://www.codewars.com/kata/5acbc3b3481ebb23a400007d

function isFlush(cards) {
    const suitsArray = cards.map(item => item[item.length-1]);
    const flush = suitsArray.every((letter) => letter === suitsArray[0]) ;
    return flush;
    
  }

  //true
  console.log(isFlush([  "AS", "3S",  "9S", "KS", "4S" ]));

  //false 
  console.log(isFlush([  "AD", "4S",  "7H", "KC", "5S" ]));