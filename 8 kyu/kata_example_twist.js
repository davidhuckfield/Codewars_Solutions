// link : https://www.codewars.com/kata/525c1a07bb6dda6944000031

// add the value "codewars" to the websites array 1,000 times
var websites = []
for (let i=0; i<1000; i++) {
  websites.push("codewars")
}

//potential other solution

var websites = new Array(1000).fill("codewars");