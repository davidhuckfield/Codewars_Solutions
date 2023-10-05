// link : https://www.codewars.com/kata/58712dfa5c538b6fc7000569

//instructions - there are two red beads in between every 2 blue beads - given n number of blue beads, return the number of red beads

function countRedBeads(n) {
    //there will be 2 red beads for every blue bead, minus the end which will not have 2 red beads after it 
    //Math.max deals with edge cases 0 and 2 which would otherwise have resulted in negatives.
    return Math.max(n*2-2, 0);
  }