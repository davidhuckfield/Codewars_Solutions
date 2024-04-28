// link : https://www.codewars.com/kata/5b18e9e06aefb52e1d0001e9

function riders(stations) {
    let currentMiles = 0;
    let riders = 1;
    for (let i=0; i<stations.length; i++) {
      if (currentMiles + stations[i] > 100) {
        riders++;
        currentMiles = stations[i];
      }
      else {
        currentMiles += stations[i];
      }
    }
    return riders;
  }