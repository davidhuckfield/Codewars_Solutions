// link : https://www.codewars.com/kata/554e4a2f232cdd87d9000038

function DNAStrand(dna){
    let complementary = dna.split("");
    for (let i = 0; i < complementary.length; i++) {
      switch (complementary[i]) {
      case "G": complementary[i] = "C";
          break;
      case "C": complementary[i] = "G";
          break;
      case "A": complementary[i] = "T";
          break;
      case "T": complementary[i] = "A";
          break;
    }
    }
    return complementary.join("");
    
    
  }

  // more efficient solution
  //first split the string into an array of characters
  //map returns the character at the position of the key that matches each value
  
  var pairs = {'A':'T','T':'A','C':'G','G':'C'};

function DNAStrand(dna){
  return dna.split('').map(function(v){ return pairs[v] }).join('');
}