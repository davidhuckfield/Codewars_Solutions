// link : https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1

function duplicateCount(text){
    const charCount = new Map();
     let duplicates = 0;
   
     for (let i = 0; i < text.length; i++) {
       const char = text[i].toLowerCase();
       const count = charCount.get(char) || 0;
       charCount.set(char, count + 1);
     }
   
     for (const count of charCount.values()) {
       if (count > 1) {
         duplicates++;
       }
     }
   
     return duplicates;
     }