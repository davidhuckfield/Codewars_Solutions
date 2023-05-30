// link : https://www.codewars.com/kata/59f70440bee845599c000085

function findHack(arr) {
    let hackerNames = [];
    for (i = 0; i < arr.length; i++) {
      let actualScore = 0;
      let gradeCount = 0;
      let goodGrades = true;
      for (y = 0; y < arr[i][2].length; y++) {
        switch (arr[i][2][y]) {
          case 'A':
            actualScore += 30;
            gradeCount++;
            break;
          case 'B':
            actualScore += 20;
            gradeCount++;
            break;
          case 'C':
            actualScore += 10;
            gradeCount++;
            break;
          case 'D':
            actualScore += 5;
            gradeCount++;
            break;
          default:
            break;
        }
        if (!/^[AB]$/.test(arr[i][2][y])) {
          goodGrades = false;
        }
      }
      if (gradeCount >= 5 && goodGrades) {
        actualScore += 20;
      }
      actualScore = Math.min(actualScore, 200);
      if (arr[i][1] != actualScore) {
        hackerNames.push(arr[i][0])
      }
    }
    return hackerNames;
  }