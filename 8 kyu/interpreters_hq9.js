// link : https://www.codewars.com/kata/591588d49f4056e13f000001

function HQ9(code) {
  
    let song = "";
    for (let i=99; i>2; i--) {
      song = song.concat(i + " bottles of beer on the wall, " + i + " bottles of beer.\nTake one down and pass it around, " +(i-1) + " bottles of beer on the wall.\n")
    }
    song = song.concat(`2 bottles of beer on the wall, 2 bottles of beer.\nTake one down and pass it around, 1 bottle of beer on the wall.\n1 bottle of beer on the wall, 1 bottle of beer.\nTake one down and pass it around, no more bottles of beer on the wall.\nNo more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.`)
    switch (code) {
        case "H":return "Hello World!";
        break;
        case "Q":return code;
        break;
        case "9": return song;
        break;
    }
  }