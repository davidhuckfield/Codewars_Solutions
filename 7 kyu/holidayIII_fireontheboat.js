// link : https://www.codewars.com/kata/57e8fba2f11c647abc000944

function fireFight(s){
    //   .map
      let newArray= s.split(' ');
      let anotherArray= newArray.map((item)=> item.replace ('Fire', '~~'))
      return anotherArray.join(' ') ;
    };