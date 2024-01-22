// link : https://www.codewars.com/kata/558ee8415872565824000007

function isDivisible(){
      if (arguments.length === 1) {
          return true;
      }
      let allDivisible=true;
      let firstArgument=arguments[0];
      for (let i=1; i<arguments.length; i++) {
          if (firstArgument % arguments[i] !==0) {
              allDivisible=false;
          }
      }
      return allDivisible;
    }