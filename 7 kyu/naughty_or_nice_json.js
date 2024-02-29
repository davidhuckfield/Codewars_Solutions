// link : https://www.codewars.com/kata/5662b14e0a1fb8320a00005c

function naughtyOrNice(data) {
    const counts = {};
       function recurse(currentObj) {
          for (const key in currentObj) {
              if (typeof currentObj[key] === 'object') {
                  recurse(currentObj[key]);
              } else {
                  const value = currentObj[key];
                  if (!counts[value]) {
                      counts[value] = 1;
                  } else {
                      counts[value]++;
                  }
              }
          }
      }
  
      recurse(data);
      let naughty = counts.Naughty;
      let nice = counts.Nice;
      return naughty > nice ? "Naughty!" : "Nice!";
  }