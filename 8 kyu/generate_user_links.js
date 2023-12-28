// link : https://www.codewars.com/kata/57037ed25a7263ac35000c80

function generateLink(user) {
    let url = "http://www.codewars.com/users/";
    let encodedUser = encodeURIComponent(user);
    return url + encodedUser;
  }