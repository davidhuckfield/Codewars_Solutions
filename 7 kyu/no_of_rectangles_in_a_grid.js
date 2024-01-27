// link : https://www.codewars.com/kata/556cebcf7c58da564a000045

function numberOfRectangles(m, n) {
    let total = 0;
    for (let i=1; i<=m; i++) {
        for (let y=1; y<=n; y++) {
            total += (m-i+1) * (n-y+1);
        }
    }
    return total;
  }

  console.log(numberOfRectangles(4,4));