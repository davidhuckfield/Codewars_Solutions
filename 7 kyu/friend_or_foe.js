// link : https://www.codewars.com/kata/55b42574ff091733d900002f

function friend(friends){
    let myFriends=[];
    for (let i = 0; i < friends.length; i++) {
      if (friends[i].length === 4) {
        myFriends.push(friends[i]);
      }
    }
    return myFriends;
  }