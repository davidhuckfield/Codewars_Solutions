function coinFlips(flips, run, initialBet) {

    //declare variables for number of heads or tails in a row, and the maximum run of heads or tails
    let headsrow = 0;
    let tailsrow = 0;
    let maxheadsrow = 0;
    let maxtailsrow = 0;
    
    //declare variables for total money, max money reached, and min money reached
    let totalMoney =0;
    let maxMoney = 0;
    let minMoney = 0;
    
    //declare current bet which may change, initialise it as initialBet input
    //declare currentChoice (heads or tails / H or T)
    let currentBet = initialBet;
    let currentChoice = "";

    //outer loop to perform the flips
        for (let i=0; i<flips; i++) {

            //if random number is below 0.5, then heads has been flipped
            if (Math.random() < 0.5) {
                //increase the number of heads in a row by 1
                headsrow++;
                //reset tails in a row to 0, as heads has been flipped
                tailsrow = 0;
                //if the current heads in a row is greater than the max heads in a row, then set max heads in a row to current heads in a row
                if (headsrow > maxheadsrow) {
                    maxheadsrow = headsrow;
                }
                //resolve current bet 
                
            }

            //otherwise, tails has been flipped
            else {
                //increase the number of tails in a row by 1
                tailsrow++;
                //reset heads in a row to 0, as tails has been flipped
                headsrow = 0;
                //if the current tails in a row is greater than the max tails in a row, then set max tails in a row to current tails in a row
                if (tailsrow > maxtailsrow) {
                    maxtailsrow = tailsrow;
                }
            }
        }
}

//call function with number of flips to perform, run of heads or tails to bet at, and initial bet
coinFlips(10, 3, 5);
