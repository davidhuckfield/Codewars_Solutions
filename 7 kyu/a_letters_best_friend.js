// link : https://www.codewars.com/kata/64fc03a318692c1333ebc04c

function bestFriend(txt, a, b) {
    let returnValue = true;;
    let txtSplit = txt.split("")
    for (let i=0; i<txtSplit.length; i++) {
      if (txtSplit[i]===a) {
        if (txtSplit[i+1]!==b) {
          returnValue=false;
        }
      }
    }
    return returnValue;
  }