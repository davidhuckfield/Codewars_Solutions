// link : https://www.codewars.com/kata/57f222ce69e09c3630000212/train/javascript

function well(x){
  const goodCount = x.reduce((acc,curr) => acc + (curr==="good" ? 1 : 0),0);
  const badCount = x.reduce((acc,curr) => acc + (curr==="bad" ? 1 : 0),0);
 
  if (goodCount>2) {return "I smell a series!"}
  else if (goodCount>0) {return "Publish!"}
  else {return "Fail!"}
  
}

