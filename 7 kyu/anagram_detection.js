// link : https://www.codewars.com/kata/529eef7a9194e0cbc1000255

var isAnagram = function(test, original) {

    test=test.toLowerCase();
    original=original.toLowerCase();

    if (test.length !== original.length) {
        return false;
    }

    let sortedTest = test.split("").sort().join("");
    let sortedOriginal = original.split("").sort().join("");

    return sortedTest === sortedOriginal;

};