//link : https://www.codewars.com/kata/5bb904724c47249b10000131

function points(games) {
    let points = 0;
    for (let i=0; i< games.length; i++) {
      let scores = games[i].split(":");
      if (scores[0] > scores[1]) {points+=3;}
      else if (scores[0] === scores [1]) {points+=1}
    }
    return points;
  }