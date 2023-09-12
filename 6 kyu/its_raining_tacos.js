// link : https://www.codewars.com/kata/64f4ef596f222e004b877272

function rainTacos(landscape) {
    //create 3d array to store input
    //while loop?
    //create outer array
    let landscapeArray=[];
    //create first array
    landscapeArray.push([]);

    //each time you encounter \n, move to next array
    //increment x and push new empty array each time \n encountered
    //if not \n, push character[i] to array [x][y]
    for (let i=0; i<landscape.length; i++) {
      if (landscape[i]==="\n") {
        landscapeArray.push([]);
      } else {
        landscapeArray[landscapeArray.length-1].push(landscape[i]);
      }
    }
    
    //variable for word "TACO"
    let taco="TACO";
    //variable to store current letter of "TACO"
    let currentLetter=0;

    //if the current letter is the last letter in the word, reset to 0, otherwise increment by 1
    function incrementLetter() {
      if (currentLetter===3) {
        currentLetter=0
      }
      else {
        currentLetter++;
      }
    }
    
    //loop to go across each column - starting 0, ending landscapeArray[0].length
    for (let x=0; x<landscapeArray[0].length; x++) {
      //within that, loop to go from top to bottom (top 0, bottom landscapeArray.length)
      for (let y=0; y<landscapeArray.length; y++) {

        //if the current position is not a space/empty, break
        if (landscapeArray[y][x]!==" ") {
          incrementLetter();
          break;
        }
        //if the current position is at the end of the vertical column and is a space/empty, replace with current letter of taco, increment letter
        else if (y===landscapeArray.length-1 && landscapeArray[y][x]===" ") {
          landscapeArray[y][x]=taco[currentLetter];
          incrementLetter();
        }
        else if (landscapeArray[y+1][x]!==" ") {
          landscapeArray[y][x]=taco[currentLetter];
          incrementLetter();
          break;
          
          
          
        }
      }
    }
    
    //at end, convert back into string
    //new variable returnArray, =landscapeArray.map (subarray=>subarray.join(""))
    let returnArray = [];

    for (let i=0; i<landscapeArray.length; i++) {
      returnArray.push(landscapeArray[i].join(""));
    }

    //new variable returnString, returnArray.join("\n")
    let returnString = returnArray.join("\n");

    // console.table(landscapeArray);
    // console.log(returnString);
    return returnString;
  }

  rainTacos("* *\n* *\n* *\n* *\n* *\n* *\n* *\n* *\n* *\n* *");