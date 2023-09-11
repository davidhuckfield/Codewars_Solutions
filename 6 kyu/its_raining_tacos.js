// link : https://www.codewars.com/kata/64f4ef596f222e004b877272

function rainTacos(landscape) {
    //create 3d array to store input
    //while loop?
    //create outer array
    let landscapeArray=[];
    //create first array
    landscapeArray.push([]);
    //each time you encounter \n, move to next array
    //array[x][y] = "something"
    //increment x and push new empty array each time \n encountered
    //if not \n, push character[i] to array [x][y]
    
    //variable for word "TACO"
    let taco="TACO";
    //variable to store current letter of "TACO"
    let currentLetter=1;
    //loop to go across each column - starting 0, ending landscapeArray[0].length
    //within that, loop to go from top to bottom (top 0, bottom landscapeArray.length)
    //when x position is space, make x-1 position the letter matching the current letter number
    //increment the current letter number by one
    
    //at end, convert back into string
    //new variable returnArray, =landscapeArray.map (subarray=>subarray.join(""))
    //new variable returnString, returnArray.join("\n")
    //return returnString
    
  }