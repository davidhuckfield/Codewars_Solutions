function coinFlips(flips) {
    let heads = 0;
    let tails = 0;
    let flipsArray = [];

    for (let i = 0; i < flips; i++) {
        if (Math.random() < 0.5) {
            heads++;
            flipsArray.push("H");
        } else {
            tails++;
            flipsArray.push("T");
        }
    }

    let headsrow = 0;
    let tailsrow = 0;
    let maxheadsrow = 0;
    let maxtailsrow = 0;
    let initialBet = 5;
    let betChoice = "";
    let totalMoney = 5;
    let minMoney = totalMoney;
    let maxMoney = totalMoney;

    for (let i = 0; i < flipsArray.length; i++) {
        if (flipsArray[i] == "H") {
            headsrow++;
            if (headsrow > maxheadsrow) {
                maxheadsrow = headsrow;
            }
            if (headsrow >= 3) {
                betChoice = "T";
                totalMoney -= initialBet;
                if (totalMoney < minMoney) {
                    minMoney = totalMoney;
                }
            }
            if (betChoice === "H") {
                totalMoney += initialBet*2;
                if (totalMoney > maxMoney) {
                    maxMoney = totalMoney;
                }
            }
            else if (betChoice === "T") {
                totalMoney -= initialBet;
                if (totalMoney < minMoney) {
                    minMoney = totalMoney;
                }
            }
            tailsrow = 0;
        } else {
            tailsrow++;
            if (tailsrow > maxtailsrow) {
                maxtailsrow = tailsrow;
            }
            if (tailsrow >= 3) {
                betChoice = "H";
                totalMoney -= initialBet;
                if (totalMoney < minMoney) {
                    minMoney = totalMoney;
                }
            }
            if (betChoice === "T") {
                totalMoney += initialBet*2;
                if (totalMoney > maxMoney) {
                    maxMoney = totalMoney;
                }
            }
            else if (betChoice === "H") {
                totalMoney -= initialBet;
                if (totalMoney < minMoney) {
                    minMoney = totalMoney;
                }
            }
            headsrow = 0;
        }
    }

    


    console.log(`Heads: ${heads}, Tails: ${tails}`);
    console.log(`Longest run of heads: ${maxheadsrow}`);
    console.log(`Longest run of tails: ${maxtailsrow}`);
    console.log(`Total money: ${totalMoney}`);
    console.log(`Minimum money: ${minMoney}`);
    console.log(`Maximum money: ${maxMoney}`);
    console.log(flipsArray)
    
}

coinFlips(10);
