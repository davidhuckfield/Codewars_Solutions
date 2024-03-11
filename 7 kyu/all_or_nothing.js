// link : https://www.codewars.com/kata/65112af7056ad6004b5672f8

function possiblyPerfect(key,answers) {
    console.log(key, answers);
      let correct = 0;
      let incorrect = 0;
      let unknown = 0;
  
      for (let i=0; i<answers.length; i++) {
          if (key[i]==="_") {
              unknown++;
          }
          else if (answers[i]===key[i]) {
              correct++;
          }
          else {
              incorrect++;
          }
      }
  
      if (correct===answers.length || incorrect===answers.length) {
          return true;
      }
      if (correct+unknown===answers.length || incorrect + unknown===answers.length) {
          return true;
      }
      return false;
    }