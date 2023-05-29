// link : https://www.codewars.com/kata/54e6533c92449cc251001667

var uniqueInOrder=function(iterable){
    let newArray = [];
    
      
      for (let i=0; i<iterable.length; i++) {
        if (iterable[i] != iterable[i-1]) {newArray.push(iterable[i]);}
      }
      return newArray;
    }