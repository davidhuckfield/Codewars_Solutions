// link : https://www.codewars.com/kata/53d16bd82578b1fb5b00128c/train/javascript

function grader(score) {
  if (score > 1) {
    return "F";
    } else if (score >= 0.9) {
      return "A";
      } else if (score >= 0.8) {
        return "B";
        } else if (score >= 0.7) {
          return "C";
          } else if (score >= 0.6) {
            return "D"; 
            } else {
              return "F";
              }
}

