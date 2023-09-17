// link : https://www.codewars.com/kata/534e01fbbb17187c7e0000c6/train/javascript

//Plan - create a 2d array where all arrays are filled with zeros, then "spiral" around the array clockwise starting at array[0][0]
// each loop of the spiral must have 1 character of space between it and the previous loop - cannot "touch"


function spiralize (n) {
  //create counter variable
  let counter = 0;
    //create empty arrays
  let spiral = [];
  for (let i = 0; i<n; i++) {spiral.push([]);}
  //fill arrays with zero
  for (let i = 0; i<n; i++) {
    for (let y = 0; y<spiral.length; y++) {spiral[i].push(0)}
  }
  
  //create variables for easier logic
  let topRow = 0;
  let bottomRow = n-1;
  let leftCol = 0;
  let rightCol = n-1;
  
  while (topRow <= bottomRow && leftCol <= rightCol) {
  
  //top row
  console.log(`starting top row from leftCol ${leftCol} to rightCol-counter ${rightCol-counter}`)
  for (let i = leftCol; i<=rightCol-counter; i++) {
    spiral[topRow+counter][i] = 1;
    console.table(spiral);
  }
  topRow ++;
  console.log(`topRow is now ${topRow}`)

  //right hand side
  console.log(`starting right hand side from topRow+counter ${topRow+counter} to bottomRow-counter ${bottomRow-counter}`)
  for (let i = topRow+counter; i<=bottomRow-counter; i++) {
    spiral[i][rightCol-counter] = 1;
    console.table(spiral);
  }
  rightCol --;
  console.log(`rightCol is now ${rightCol}`)
  
  //bottom row
  console.log(`starting bottom row from rightCol-counter ${rightCol-counter} to leftCol+counter ${leftCol+counter}`)
  for (let i = rightCol-counter; i>=leftCol+counter; i--) {
    spiral[bottomRow-counter][i] = 1;
    console.table(spiral);
  }
  bottomRow--;
  console.log(`bottomRow is now ${bottomRow}`)
  
  //left hand side
  if (counter === 0) {counter = 1}
  console.log(`starting left hand side from bottomRow ${bottomRow} to topRow+counter ${topRow+counter}`)
  for (let i = bottomRow; i>=topRow+counter; i--) {
    spiral[i][leftCol] = 1;
    console.table(spiral);
  }
  leftCol++;
  console.log(`leftCol is now ${leftCol}`)

    }
  
  
  // return spiral;
}

spiralize(8);

//error messages

//possibly some kind of check that the next end point in the for loop is not 1 before the row it's pointing at?
// e.g. from left col to right col, is the value at right col - 1 zero? If so ok, if not then go one back?
//why is the test case for 8 hitting the previous loop on line 72 of this file?

//for n = 8:
//expected 
/*
[ 
[ 1, 1, 1, 1, 1, 1, 1, 1 ], 
[ 0, 0, 0, 0, 0, 0, 0, 1 ], 
[ 1, 1, 1, 1, 1, 1, 0, 1 ], 
[ 1, 1, 1, 1, 1, 1, 0, 1 ], 
[ 1, 1, 1, 1, 1, 1, 0, 1 ],
[ 1, 1, 1, 1, 1, 1, 0, 1 ], 
[ 1, 0, 0, 0, 0, 0, 0, 1 ], 
[ 1, 1, 1, 1, 1, 1, 1, 1 ] 
] 
//to deeply equal 
[ 
[ 1, 1, 1, 1, 1, 1, 1, 1 ], 
[ 0, 0, 0, 0, 0, 0, 0, 1 ],
[ 1, 1, 1, 1, 1, 1, 0, 1 ], 
[ 1, 0, 0, 0, 0, 1, 0, 1 ],
[ 1, 0, 1, 0, 0, 1, 0, 1 ],
[ 1, 0, 1, 1, 1, 1, 0, 1 ], 
[ 1, 0, 0, 0, 0, 0, 0, 1 ],
[ 1, 1, 1, 1, 1, 1, 1, 1 ]
]

//for n = 6:
//expected 
[ 
[ 1, 1, 1, 1, 1, 1 ],
[ 0, 0, 0, 0, 0, 1 ], 
[ 1, 1, 1, 1, 0, 1 ],
[ 1, 1, 1, 1, 0, 1 ],
[ 1, 0, 0, 0, 0, 1 ],
[ 1, 1, 1, 1, 1, 1 ] 
]
//to deeply equal 
[ 
[ 1, 1, 1, 1, 1, 1 ],
[ 0, 0, 0, 0, 0, 1 ],
[ 1, 1, 1, 1, 0, 1 ], 
[ 1, 0, 0, 1, 0, 1 ], 
[ 1, 0, 0, 0, 0, 1 ],
[ 1, 1, 1, 1, 1, 1 ] 
]
*/