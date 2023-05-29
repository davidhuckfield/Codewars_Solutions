// link : https://www.codewars.com/kata/57eb8fcdf670e99d9b000272



function high(x){
//create object with the score of each letter
    const alphabet = {
    a: 1,b: 2,c: 3,d: 4,e: 5,f: 6,g: 7,h: 8,i: 9,j: 10,k: 11,l: 12,m: 13,n: 14,o: 15,p: 16,q: 17,r: 18,s: 19,t: 20,u: 21,v: 22,w: 23,x: 24,y: 25,z: 26
  };
  
//function to score each individual word 
//split word into letters 
//look up that letter in the alphabet object with the index of the current letter
    function wordScore (word) {
      let letters = word.split("");
      let score = 0;
      for (let i=0; i<letters.length; i++) {
        score += alphabet[letters[i].toLowerCase()]
      }
      return score;
    }
  //split the sentence into words
    let wordArray = x.split(" ")
  //variable for highest score
    let highScore=0;
  //variable for high score word
    let highScoreWord="";
  //go through each word, if score is higher than high score then change the word
    for (let i=0; i<wordArray.length; i++) {
      let score = wordScore(wordArray[i]);
      if (score > highScore) {highScore = score;
                             highScoreWord = wordArray[i];}
    }
    return highScoreWord;
  }