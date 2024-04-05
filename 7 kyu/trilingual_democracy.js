// link : https://www.codewars.com/kata/62f17be8356b63006a9899dc

function trilingualDemocracy(group) {

    //split the input string into an array
    let splitGroup = group.split("");
    
    //create a counts object to count how many instances of each letter
    let counts = {D:0, F:0, I:0, K:0};

    //create variable to store the return string
    let chosenLanguage;

    //loop through array and add the count of each instance to the object
    for (let i=0; i<splitGroup.length; i++) {
        counts[splitGroup[i]]++;
    }

    // console.log(`counts is now ${JSON.stringify(counts)}`);

    //if any key in the object has a value of 3, this means all 3 speakers have the same language, as it was specified that only 3 letters would be input
    if (Object.values(counts).some(value => value===3)) {
        //therefore return the key with the value of 3, as all 3 will speak the same language
        chosenLanguage = Object.keys(counts).find(key => counts[key]===3);
    }

    //if any key in the object has a value of 2, this means 2 speak the same language and 1 will remain in a different language
    else if (Object.values(counts).some(value => value===2)) {
        //in this case it's specified that they will speak the minority language, so return the key with a count of 1
        chosenLanguage = Object.keys(counts).find(key => counts[key]===1);
    }

    //if neither of the above is true, it means all 3 speak a different language, so there will be 3 languages with a count of 1
    else {
        //it's specified that in this case, they converse in the remaining language, therefore return the key with a count of 0
        chosenLanguage = Object.keys(counts).find(key => counts[key]===0);
    }

    return chosenLanguage;

  }

  //F
  console.log(trilingualDemocracy("FFF"));

  // K
  console.log(trilingualDemocracy("IIK"));

  // I
  console.log(trilingualDemocracy("DFK"));

