// link : https://www.codewars.com/kata/5aefd0a686d075d5f3000091

function cookingTime(neededPower, minutes, seconds, power) {
    let totalSeconds = seconds;
    totalSeconds += (minutes * 60);
    
    let actualPowerNumber = parseInt(power.substring(0, power.length));
    let neededPowerNumber = parseInt(neededPower.substring(0, neededPower.length));
    let factor = actualPowerNumber / neededPowerNumber;
    
    let newSeconds = totalSeconds / factor;
  
    let returnSeconds = newSeconds % 60;
    let returnMinutes = (newSeconds - returnSeconds) / 60;
  
    returnSeconds = Math.ceil(returnSeconds);
    if (returnSeconds === 60) {
      returnSeconds=0;
      returnMinutes++;
    }
    return `${returnMinutes} minutes ${returnSeconds} seconds`;
  }