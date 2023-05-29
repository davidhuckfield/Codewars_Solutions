// link : https://www.codewars.com/kata/5254ca2719453dcc0b00027d

function permutations(string) {
    if (string.length === 0) {return [string];}
      
    const permutationsArray = [];
      
      for (let i=0; i<string.length; i++) {
        const char = string[i];
        
        const remainingString = string.slice(0, i) + string.slice(i+1);
        
        const innerPermutations = permutations(remainingString);
        
        for(let x=0; x<innerPermutations.length; x++) {
          permutationsArray.push(char + innerPermutations[x]);
        }
      }
      return [...new Set(permutationsArray)];
    }