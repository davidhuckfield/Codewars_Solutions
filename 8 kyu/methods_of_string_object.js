// link : https://www.codewars.com/kata/57280481e8118511f7000ffa/train/javascript

function splitAndMerge(string, separator) {
    let wordArray=string.split(" ");
    let joinedArray=[];
      for (let i=0; i<wordArray.length; i++) {
        let splitWord=wordArray[i].split("");
        joinedArray.push(splitWord.join(separator));
        
      }
    return joinedArray.join(" ");
  }