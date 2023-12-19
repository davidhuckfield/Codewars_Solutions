// link : https://www.codewars.com/kata/569924899aa8541eb200003f

function quicksum(packet){
    let packetArray = packet.split("");
    let sum = 0;
    for (let i=0; i<packetArray.length; i++) {
      
      let currentCode = packetArray[i].charCodeAt(0);
      let currentValue = currentCode-64;
      
      if ((currentCode < 65 || currentCode > 90) && currentCode !==32) {
        sum=0;
        break;
      }
      else if (currentCode >= 65 && currentCode <= 90) {
        sum += currentValue*(i+1);
      }
     
      
      
    }
    return sum;
  }