// link : https://www.codewars.com/kata/53dbd5315a3c69eed20002dd

function filter_list(l) {
    // Return a new array with the strings filtered out
    return l.filter((item) => {
                    return typeof(item)==="number";
                    })
  }