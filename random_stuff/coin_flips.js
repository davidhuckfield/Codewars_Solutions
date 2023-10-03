//inputs are number of coin flips (flips), how many heads or tails in a row needed to bet the opposite (run), and the initial bet (initialBet)
function coinFlips(flips, run, initialBet) {

    //declare variables for number of heads or tails in a row, and the maximum run of heads or tails
    let totaltails = 0;
    let totalheads = 0;
    let headsrow = 0;
    let tailsrow = 0;
    let maxheadsrow = 0;
    let maxtailsrow = 0;
    //declare results array to store detailed results of each flip
    let resultsArray = [];
    //push the first row of the results array, which is the column headings
    resultsArray.push(["Choice", "Bet", "Flip", "Result", "Money change", "Total Money", "Current Run", "Next choice", "Next bet", "Total Money"]);
    
    //declare variables for total money, max money reached, and min money reached
    let totalMoney = 0;
    let maxMoney = 0;
    let minMoney = 0;
    
    //declare current bet which may change, initialise it as initialBet input
    //declare currentChoice (heads or tails / H or T)
    let currentBet = 0;
    let currentChoice = "";

    //outer loop to perform the flips
        for (let i=0; i<flips; i++) {
            //push a new array to the results array to store this round's results
            resultsArray.push([]);
            let currentRound = resultsArray[i+1];
            currentRound.push(currentChoice);
            currentRound.push(currentBet);
            //if random number is below 0.5, then heads has been flipped
            if (Math.random() < 0.5) {
                //push the flip result to the results array
                currentRound.push("H");
                //increase the count of heads
                totalheads++;
                //increase the number of heads in a row by 1
                headsrow++;
                //reset tails in a row to 0, as heads has been flipped
                tailsrow = 0;
                //if the current heads in a row is greater than the max heads in a row, then set max heads in a row to current heads in a row
                if (headsrow > maxheadsrow) {
                    maxheadsrow = headsrow;
                }
                //resolve current bet 
                if (currentChoice == "H") {
                    currentRound.push("Win");
                    totalMoney += currentBet*2;
                    currentRound.push(currentBet*2);
                    currentRound.push(totalMoney);
                    //update max money if necessary
                    if (totalMoney > maxMoney) {
                        maxMoney = totalMoney;
                    }
                }
                else if (currentChoice == "T") {
                    currentRound.push("Lose");
                    currentRound.push(0);
                    currentRound.push(totalMoney);
                    currentBet *= 2;
            }
                else {
                    currentRound.push("");
                    currentRound.push(0);
                    currentRound.push(totalMoney);
                }
                //push current run to results array
                currentRound.push(headsrow);
                //decide whether or not to place new bet based on run
                if (headsrow >= run) {
                    currentBet = Math.max(currentBet, initialBet);
                    currentChoice = "T";
                    totalMoney -= currentBet;
                    
                    //update min money if necessary
                    if (totalMoney < minMoney) {
                        minMoney = totalMoney;
                    }
                }
                //if run is not sufficient, set bet to 0 and choice to blank
                else {
                    currentBet = 0;
                    currentChoice = "";    
                }
                //push next choice and bet to results array
                currentRound.push(currentChoice);
                currentRound.push(currentBet);
                currentRound.push(totalMoney);
                
            }

            //otherwise, tails has been flipped
            else {
                //push the flip result to the results array
                currentRound.push("T");
                //increase the count of tails
                totaltails++;
                //increase the number of tails in a row by 1
                tailsrow++;
                //reset heads in a row to 0, as tails has been flipped
                headsrow = 0;
                //if the current tails in a row is greater than the max tails in a row, then set max tails in a row to current tails in a row
                if (tailsrow > maxtailsrow) {
                    maxtailsrow = tailsrow;
                }
                //resolve current bet 
                if (currentChoice == "T") {
                    currentRound.push("Win");
                    totalMoney += currentBet*2;
                    currentRound.push(currentBet*2);
                    currentRound.push(totalMoney);
                    //update max money if necessary
                    if (totalMoney > maxMoney) {
                        maxMoney = totalMoney;
                    }
                }
                else if (currentChoice == "H") {
                    currentRound.push("Lose");
                    currentRound.push(0);
                    currentRound.push(totalMoney);
                    currentBet *= 2;
            }
                else {
                    currentRound.push("");
                    currentRound.push(0);
                    currentRound.push(totalMoney);
                }
                //push current run to results array
                currentRound.push(tailsrow);
                //decide whether or not to place new bet based on run
                if (tailsrow >= run) {
                    currentBet = Math.max(currentBet, initialBet);
                    currentChoice = "H";
                    totalMoney -= currentBet;

                    //update min money if necessary
                    if (totalMoney < minMoney) {
                        minMoney = totalMoney;
                    }
                }
                //if run is not sufficient, set bet to 0 and choice to blank
                else {
                    currentBet = 0;
                    currentChoice = "";    
                }
                //push next choice and bet to results array
                currentRound.push(currentChoice);
                currentRound.push(currentBet);
                currentRound.push(totalMoney);
            }
        }

        //print results to console
        console.log("Total flips: " + flips);
        console.log("Max heads in a row: " + maxheadsrow);
        console.log("Max tails in a row: " + maxtailsrow);
        console.log("Total money: " + totalMoney);
        console.log("Total heads: " + totalheads);
        console.log("Total tails: " + totaltails);
        console.log("Max money: " + maxMoney);
        console.log("Min money: " + minMoney);
        console.table(resultsArray);
}

//call function with number of flips to perform, run of heads or tails to bet at, and initial bet
coinFlips(1000, 3, 5);
