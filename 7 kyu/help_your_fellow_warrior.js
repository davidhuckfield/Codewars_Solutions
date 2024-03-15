// link : https://www.codewars.com/kata/5660aa6fa60f03856c000045

function getHonorPath(honorScore, targetHonorScore) {
    //if honor score is already at or greater than the target, return empty object, no changes necessary
    if (targetHonorScore<=honorScore) {
      return {};
    }

    //calculate difference between current score and target score
    let difference = targetHonorScore-honorScore;

    //only 2 or 1 score tasks are possible, calculate if there is a remainder after completing as many 2 score tasks as possible
    let remainder = difference % 2;

    //create object to return with values set to zero
    let returnScores = {"1kyus":0, "2kyus":0};

    //set the number of 2 score tasks to the difference-remainder (the even amount of the difference) and divided by 2
    returnScores["1kyus"]=((difference-remainder)/2);

    //set the number of 1 score tasks to the remainder, whatever is left of the difference after doing as many 2 score tasks as possible
    returnScores["2kyus"]=remainder;

    //return the object with the number of each task
    return returnScores;
  }