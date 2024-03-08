// link : https://www.codewars.com/kata/552fd698ac49561baf00006e/train/javascript

const dictWords = [
    "american","four","i","john","may","mr","mrs","us","united","a",
    "about","act","after","again","against","all","almost","along","also","always",
    "am","among","an","and","another","any","are","around","as","asked",
    "at","away","back","be","because","become","been","before","began","best",
    "better","between","big","both","business","but","by","called","came","can",
    "case","certain","change","child","children","church","city","close","come","company",
    "could","country","course","day","days","development","did","didn't","do","does",
    "don't","done","down","during","each","early","end","enough","even","ever",
    "every","eyes","face","fact","family","far","feel","felt","few","find",
    "first","for","form","from","general","get","give","given","go","god",
    "going","good","got","govern","government","great","group","had","hand","has",
    "have","he","head","help","her","here","high","him","himself","his",
    "home","house","how","however","if","important","in","interest","into","is",
    "it","its","just","keep","kind","knew","know","large","last","later",
    "law","least","leave","less","let","life","light","like","line","little",
    "long","look","looked","made","make","man","many","matter","me","mean",
    "means","members","men","might","mind","more","most","much","must","my",
    "name","national","need","never","new","next","night","no","not","nothing",
    "now","number","of","off","often","old","on","once","one","only",
    "open","or","order","other","others","our","out","over","own","part",
    "people","per","place","point","possible","power","present","president","problem","program",
    "public","put","question","rather","real","right","room","said","same","say",
    "school","second","see","seem","seemed","sense","service","set","several","she",
    "should","show","side","since","small","so","social","some","something","state",
    "states","still","such","system","take","tell","than","that","the","their",
    "them","then","there","these","they","thing","things","think","this","those",
    "though","thought","three","through","time","to","told","too","took","toward",
    "turn","turned","two","under","unite","until","up","upon","use","used",
    "very","want","war","was","water","way","we","week","well","went",
    "were","what","when","where","which","while","white","who","why","will",
    "with","within","without","word","work","would","year","yet","you","young",
    "your"
  ];

function wordBreak(dictWords,sentence) {
    let returnWords=[];

    function filterWordList(text) {
        let filteredWords=dictWords.filter(word => word.charAt(0)===text.charAt(0));
        return filteredWords;
    }

    let currentStartPosition=0;
    let currentEndPosition=1;

    while (currentStartPosition<sentence.length) {
        let currentText=sentence.substring(currentStartPosition, currentEndPosition);
        let filteredWordList = filterWordList(currentText);
        if (filteredWordList.includes(currentText)) {
            returnWords.push(currentText);
            currentStartPosition+=(currentText.length-1);
            currentEndPosition=currentStartPosition+1;
        }
        
        currentEndPosition++;
        if (currentEndPosition>=sentence.length) {
            currentStartPosition++;
            currentEndPosition=currentStartPosition+1;
        }

    }

    const returnWordsNoDuplicates = [...new Set(returnWords)];
    return returnWordsNoDuplicates;
    
  }


  // ["one", "two", "three", "little", "indians"]
  console.log(wordBreak(dictWords, "onelittletwolittlethreelittleindians"));