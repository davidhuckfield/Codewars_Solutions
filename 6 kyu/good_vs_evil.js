// link : https://www.codewars.com/kata/52761ee4cffbc69732000738

function goodVsEvil(good, evil){
    let goodValues = [1,2,3,3,4,10];
    let evilValues = [1,2,2,2,3,5,10];
    //console.log(`good : ${good}`);
    //console.log(`evil : ${evil}`);
    let goodArray = good.split(" ").map(item => parseInt(item));
    let evilArray = evil.split(" ").map(item => parseInt(item));
    //console.log(`goodArray : ${goodArray}`);
    //console.log(`evilArray : ${evilArray}`);
    let goodTotal=0;
    for (let i=0; i<goodArray.length; i++) {
      goodTotal += goodArray[i]*goodValues[i];
    }
    //console.log(`goodTotal : ${goodTotal}`);
    let evilTotal=0;
    for (let i=0; i<evilArray.length; i++) {
      evilTotal += evilArray[i]*evilValues[i];
    }
    //console.log(`evilTotal : ${evilTotal}`);
    if (goodTotal > evilTotal) {
      return "Battle Result: Good triumphs over Evil";
    }
    else if (evilTotal > goodTotal) {
      return "Battle Result: Evil eradicates all trace of Good";
    }
    else {
      return "Battle Result: No victor on this battle field";
    }
  }
  