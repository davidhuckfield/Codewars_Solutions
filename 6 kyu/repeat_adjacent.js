// link : https://www.codewars.com/kata/58b8dccecf49e57a5a00000e

function repeatAdjacent(s) {
    

    function groupCheck(s) {
        let currentLetter=s[0];
        let currentCount=0;
        let currentGroupRecorded=false;
        let groups=[];
    for (let i=0; i<s.length; i++) {
        if (currentLetter===s[i] && currentLetter!==".") {
            currentCount++;
            if (currentCount>=2 && !currentGroupRecorded) {
                groups.push("x");
                currentGroupRecorded=true;
            }
        }
        else {
            currentLetter=s[i];
            currentCount=1;
            if (!currentGroupRecorded) {groups.push(".");}
            currentGroupRecorded=false;
        }
    }
    return groups;
}

let firstCheck = groupCheck(s);
console.log(firstCheck);
let secondCheck = groupCheck(firstCheck.join(""));
const count = secondCheck.filter(char => char==="x").length;
return count;

        
  }

  // 3

  console.log(repeatAdjacent("ccccoodeffffiiighhhhhhhhhhttttttts"));