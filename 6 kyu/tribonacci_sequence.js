// link : https://www.codewars.com/kata/556deca17c58da83c00002db

function tribonacci(signature,n){
  let newArray = [];
  for (let i=0; i<n; i++) {
    if (signature.hasOwnProperty(i)) {newArray.push(signature[i])}
    else {
      
      let newEntry = (newArray[i-1] + newArray[i-2] +newArray[i-3])
      newArray.push(newEntry);
      }
    
  }
  return newArray;
}