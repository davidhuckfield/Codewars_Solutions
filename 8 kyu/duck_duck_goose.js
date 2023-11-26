// link : https://www.codewars.com/kata/582e0e592029ea10530009ce

function duckDuckGoose(players, goose) {
    let location;
  
    if (goose > players.length) {
      location = goose % players.length;
      if (location === 0) {
        location = players.length - 1;
      } else {
        location--;
      }
    } else {
      location = goose - 1;
    }
    return players[location].name;
  }