// link : https://www.codewars.com/kata/63b06ea0c9e1ce000f1e2407

//A < B < C < D 

//input is list of A, B, C, D, AxB, BxC, CxD, DxA

//return the value of D 

function alphabet(ns) {
    console.log(ns);
      let A = Math.min(...ns);
      console.log(`A is ${A}`);

      let CxD = Math.max(...ns);
      console.log(`CxD is ${CxD}`);

      let filtered = ns.filter(num => num!==A && num!==CxD);
      console.log(`list with A and CxD filtered out is ${filtered}`);

      let possibleBorD = [];

      console.log(`B or D for loop starts:`);
      for (let i=0; i<filtered.length; i++) {
        let firstHalf = filtered.slice(0,i);
        let secondHalf = filtered.slice(i+1);
        let combined = [...firstHalf, ...secondHalf];
        console.log(`current value is ${filtered[i]}`);
        console.log(`combined list excluding current value is ${combined}`);
        if (combined.includes(filtered[i]*A)) {
          possibleBorD.push(filtered[i]);
        }
      }
      possibleBorD = [...new Set(possibleBorD)];
      console.log(`possible B or D list is ${possibleBorD}`);
      
      if (possibleBorD.length<=2) {return Math.max(...possibleBorD);}

      let possibleCs = [];

      console.log(`C for loop starts:`);
      for (let i=0; i<filtered.length; i++) {
        let firstHalf = filtered.slice(0,i);
        let secondHalf = filtered.slice(i+1);
        let combined = [...firstHalf, ...secondHalf];
        for (let y=0; y<possibleBorD.length; y++) {
            if (filtered[i]!==possibleBorD[y] && combined.includes(filtered[i]*possibleBorD[y])) {
                possibleCs.push(filtered[i]);
            }
        }
      }
      let D = CxD / possibleCs[0];

      return D;

      
    }

//expected answer 4
// console.log(alphabet([2,3,4,1,12,6,2,4]));
// console.log(alphabet([2,6,7,3,14,35,15,5]));
console.log(alphabet([20,10,6,5,4,3,2,12]));