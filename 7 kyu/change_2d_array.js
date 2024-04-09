// link : https://www.codewars.com/kata/581214d54624a8232100005f
//change negatives to 0, change others (inc 0) to 1

function matrix(array) {
    let newArray = [...array];
    let position=0;
   for (let i=0; i<newArray.length; i++) {
        if (newArray[i][position]<0) {
            newArray[i][position]=0;
        }
        else {
            newArray[i][position]=1;
        }
        position++;
   }
   return newArray;
}


/* [
    [0, 4, -5, -9, 3], 
    [6, 0, -7, 4, -5], 
    [3, 5, 1, -9, -1], 
    [1, 5, -7, 0, -9], 
    [-3, 2, 1, -5, 1]]
    */

console.log(matrix([
    [-1, 4, -5, -9, 3], 
    [6, -4, -7, 4, -5], 
    [3, 5, 4, -9, -1], 
    [1, 5, -7, -8, -9], 
    [-3, 2, 1, -5, 6]
]))