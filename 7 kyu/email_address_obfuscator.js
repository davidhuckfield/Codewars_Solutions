// link : https://www.codewars.com/kata/562d8d4c434582007300004e/train/javascript

//using /Hello/g instead of "Hello" replaces all instances
//using this with . replaces all characters as . in regex means any character except newline. 
//used \ to escape and match only literal dots.
obfuscate = function(email) {
    email = email.replace(/\@/g, " [at] ");
    email = email.replace(/\./g, " [dot] ");
    
    return email;
  }