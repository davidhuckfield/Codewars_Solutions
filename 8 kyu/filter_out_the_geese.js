// link : https://www.codewars.com/kata/57ee4a67108d3fd9eb0000e7

function gooseFilter (birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    const filtered = birds.filter(function(bird) {
        return !geese.includes(bird);
    })
    return filtered;
    
    }