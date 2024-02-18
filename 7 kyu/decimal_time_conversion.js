// link : https://www.codewars.com/kata/6397b0d461067e0030d1315e

function toIndustrial(time){
    let hours = 0;
    let minutes = 0;

    //check if input is integer minutes or string h:mm
    if (typeof time === "string" && time.includes(":")) {
        //split string into hours and minutes
        let parts = time.split(":");
        //set hours and minutes variables from split parts
        hours = parseInt(parts[0], 10);
        //convert minutes into decimal minutes
        minutes = parseInt(parts[1], 10) / 60 * 100;
    } else if (typeof time === "number") {
        hours = Math.floor(time / 60);
        minutes = (time % 60) / 60 * 100;
    }
    return (hours + minutes / 100).toFixed(2);
  }
  
  function toNormal(time){
    let hours = Math.floor(time);
    let decimalMinutes = (time - hours) * 100;
    let minutes = Math.round(decimalMinutes / 100 * 60);
    if (minutes===60) {
        hours+=1;
        minutes=0;
    }
    return `${hours}:${minutes < 10 ? '0' + minutes : minutes}`;
  }

  console.log(toIndustrial("0:03"));
  console.log(toNormal(1.5));