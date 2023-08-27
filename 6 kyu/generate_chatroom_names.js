// link : https://www.codewars.com/kata/64d9f8b2dd14d200247b8184/train/javascript

function generateChatRoomNames(users) {
  
    //create empty array to store names as objects for easier access to first & last names
    let usersArray = [];
  
    //for each name in the input array, create an object with first and last name and push to the usersArray
    for (let i=0; i<users.length;i++) {
      let names=users[i].split(" ");
      
      //convert each name to title case in advance by making the first character uppercase and all others lowercase
      let firstName=names[0].charAt(0).toUpperCase() + names[0].substr(1).toLowerCase();
      let lastName=names[1].charAt(0).toUpperCase() + names[1].substr(1).toLowerCase();
      usersArray.push({firstName:firstName, lastName:lastName})
      }
    
    //create an empty array for the results
    let returnArray = [];
    
    //for each name, check for duplicates and push to the return array.
    for (let i=0; i<usersArray.length; i++) {
      
      //count how many instances of that name and initial
      let countNameAndInitial = 0;
      usersArray.forEach((person) => {
        if (person.firstName === usersArray[i].firstName && person.lastName[0] === usersArray[i].lastName[0]) {
          countNameAndInitial++;
        }
      })
      
      //count how many instances of that first name
      let countFirstName = 0;
      usersArray.forEach((person) => {
        if (person.firstName === usersArray[i].firstName) {
          countFirstName++;
        }
      })
      
      //if more than 1 instance of that name and initial, return both full names
      if (countNameAndInitial > 1) {
        returnArray.push(usersArray[i].firstName + " " + usersArray[i].lastName)
      }
      //if more than 1 instance of that first name, return first name and initial
      else if (countFirstName > 1) {
        returnArray.push(usersArray[i].firstName + " " + usersArray[i].lastName[0])
      }
      //otherwise return first name only
      else {
        returnArray.push(usersArray[i].firstName)
      }
    }
    
    //sort the return array alphabetically
    returnArray.sort();
    //return the results array
    return returnArray;
  }