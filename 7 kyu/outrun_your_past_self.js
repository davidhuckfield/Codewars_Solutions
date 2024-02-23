// link : https://www.codewars.com/kata/6525caefd77c582baf678ddf

function number_lappings(my_speed,ghost_speed,time,round_length){

    let myDistance = my_speed * time;
    console.log(`my distance is ${myDistance}`);

    let ghostDistance = ghost_speed * time;
    console.log(`ghost distance is ${ghostDistance}`);

    let extraDistance = myDistance - ghostDistance;
    console.log(`extraDistance is ${extraDistance}`);
    console.log(`times lapped before floor is ${extraDistance / round_length}`);

    let timesLapped = Math.floor(extraDistance / round_length);
    
    if (extraDistance % round_length === 0) {
    timesLapped--;
    }

    timesLapped = Math.max(timesLapped, 0);
    
    return timesLapped;
  }

  //expects 0
  console.log(number_lappings(1,1,100,1));

  //expects 2
  console.log(number_lappings(14,13.5,5,1));