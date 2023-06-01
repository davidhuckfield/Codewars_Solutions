// link : https://www.codewars.com/kata/55a2d7ebe362935a210000b2

class SmallestIntegerFinder {
    findSmallestInt(args) {
      let number = args[0];
      for(let i=0; i<args.length; i++){
        if (args[i]<number){
          number = args[i]
      } 
    } return number
  }
    }