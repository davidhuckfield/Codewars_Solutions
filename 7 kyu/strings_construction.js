// link : https://www.codewars.com/kata/58870402c81516bbdb000088

function stringsConstruction(A, B) {
    let count=0;
    let finished=false;
    let availableLetters=B.split("")
    //sub-function to find letters from A in B
    function findFirstInstance(array, char) {
      for (let i=0; i<array.length; i++) {
        if (array[i] === char) {
          return i;
        }
      }
      return -1
    }
    while (!finished) {
      //for loop goes through string A
      for (let i=0; i<A.length; i++) {
        //searches for each character in availableLetters array
        let firstInstance = findFirstInstance(availableLetters, A[i])
       if (firstInstance === -1) {
        //if not present, set finished to true and break the for loop 
        finished = true;
        break;
       }
        //if present, delete that letter from available letters
        else {
          availableLetters.splice(firstInstance,1)
          console.log(availableLetters);
        }
        //at the end of each for loop, add 1 to the count
      }
      if (!finished) {
        count++;
      }
      
    }
    //when while loop finished, return count
    return count;
    
    
  }