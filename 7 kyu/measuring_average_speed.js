// link : https://www.codewars.com/kata/57b365f81fae8a0571000142

function calculateSpeed(distance, time) {

    //initialise metres and seconds variables to convert input into standard units
    let distanceMetres=0;
    let timeSeconds=0;
    
    //if the last 2 characters of the distance string are km, take the distance string minus the last two characters and multiply by 1000 to get metres
    if (distance.substring(distance.length-2)==="km") {
      distanceMetres = parseInt(distance.substring(0,distance.length-2))*1000;
    }
    //otherwise, take the distance string minus the last character and assign it directly to the distanceMetres variable
    else {
      distanceMetres = parseInt(distance.substring(0,distance.length-1));
    }
  
    //similarly with time, if the last character is s, assign the seconds to timeSeconds
    if (time.substring(time.length-1)==="s") {
      timeSeconds = parseInt(time.substring(0, time.length-1));
    }
    //otherwise it will be minutes, remove last 3 characters and multiply by 60 to get seconds
    else {
      timeSeconds = parseInt(time.substring(0, time.length-3))*60;
    }
   
    //speed in MPS is distance / seconds as we've converted these to metres and seconds
    let speedMPS = distanceMetres / timeSeconds;
  
    //convert to MPH using the given conversion value
    let speedMPH = Math.round(speedMPS * 2.23694);
    
    //return MPH plus the "mph" string at the end
    return speedMPH + "mph";
  }