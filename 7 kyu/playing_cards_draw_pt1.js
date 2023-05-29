// link : https://www.codewars.com/kata/630647be37f67000363dff04

const draw = (deck) => {
	const drawnCards = [];
  //for loop to take the 0th thing and then shift and push deck.push(deck.shift())
  while (deck.length) {
    console.log(deck + " at start of for loop");
    drawnCards.push(deck.shift());
    console.log(deck + " after pushing to drawn");
    let toBottom = deck.shift();
    deck.push(toBottom);
    console.log(deck + " after pushing to bottom");
    console.log(deck.length + " deck length")
    if (deck.length === 1) {
      if(deck[0]){
      drawnCards.push(deck[0]);
      }
       break;
    }
  }
	return drawnCards;
};