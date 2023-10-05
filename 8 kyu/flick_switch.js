// link : https://www.codewars.com/kata/64fbfe2618692c2018ebbddb

function flickSwitch(arr){
    let switchValue=true;
      let returnArray=[];
      for (let i=0; i<arr.length; i++) {
        if (arr[i]==="flick") {
          switchValue = !switchValue;
        }
          returnArray.push(switchValue);
      }
        return returnArray;
  }