// link : https://www.codewars.com/kata/583203e6eb35d7980400002a/train/javascript


function countSmileys(arr) {
// set up variable to count total valid faces
    let totalFaces = 0;
    for (let i=0; i<arr.length; i++) {
//start with the assumption that the current face is valid
      let validSmiley=true;
//if starting character ("eyes") are not either of the accepted characters, change valid to false
      if (arr[i][0] != ":" && arr[i][0] != ";") {validSmiley = false;}
//if the length is 3, the face has a nose - check if it's one of the accepted characters
//then check the last character is one of the accepted "mouths"
      if (arr[i].length === 3) {
        if (arr[i][1] != "-" && arr[i][1] != "~") {validSmiley = false;}
        if (arr[i][2] != ")" && arr[i][2] != "D") {validSmiley = false;}
      }
//if length is not 3, check the "mouth" characters only
      else {
        if (arr[i][1] != ")" && arr[i][1] != "D") {validSmiley = false;}
      }
//if by the end of the if conditions the face is still valid, add to the totalFaces count
      if (validSmiley) {totalFaces++;}
    }
//return the count of total valid faces
    return totalFaces;
  }