// link : https://www.codewars.com/kata/562dbaf65d4ab6685c0000ed

function unscramble(scramble) {
    let wordList = [ 'a',
    'ability',
    'able',
    'about',
    'above',
    'absence',
    'absolutely',
    'academic',
    'accept',
    'access',
    'accident',
    'accompany',
    'according',
    'account',
    'achieve',
    'achievement',
    'acid',
    'acquire',
    'across',
    'act',
    'action',
    'active',
    'activity',
    'actual',
    'actually',
    'add',
    'addition',
    'additional',
    'address',
    'administration',
    'admit',
    'adopt',
    'adult',
    'advance',
    'advantage',
    'advice',
    'advise',
    'affair',
    'affect',
    'afford',
    'afraid',
    'after',
    'afternoon',
    'afterwards',
    'again',
    'against',
    'age',
    'agency',
    'agent',
    'ago',
    'agree',
    'agreement',
    'ahead',
    'aid',
    'aim',
    'air',
    'aircraft',
    'all',
    'allow',
    'almost',
    'alone',
    'along',
    'already',
    'alright',
    'also',
    'alternative',
    'although',
    'always',
    'among',
    'amongst',
    'amount',
    'an',
    'analysis',
    'ancient',
    'and',
    'animal',
    'announce',
    'annual',
    'another',
    'answer',
    'any',
    'anybody',
    'anyone',
    'anything',
    'anyway',
    'apart',
    'apparent',
    'apparently',
    'appeal',
    'appear',
    'appearance',
    'application',
    'apply',
    'appoint',
    'appointment',
    'approach',
    'appropriate',
    'approve',
    'area',
    'argue'];

    let possibleWords=[];

    function checkWord(scramble, word) {
        let scrambleArray = scramble.split("");
        let match = true;
        for (let i=0; i<word.length; i++) {
            let index = scrambleArray.indexOf(word[i]);
            if (scrambleArray.includes(word[i])) {
                scrambleArray.splice(index,1);
            }
            else {
                match = false;
                break;
            }
        }
        return match;
    }

    for (let i=0; i<wordList.length; i++) {
        //had to add in the length check as tests appear to only want words of the same length - remove this to receive all words that can be made of any length
        if (checkWord(scramble, wordList[i]) && scramble.length === wordList[i].length) {
            possibleWords.push(wordList[i]);
        }
    }
    return possibleWords;
}

console.log(unscramble("mailla"));