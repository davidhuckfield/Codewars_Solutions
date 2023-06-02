// link : https://www.codewars.com/kata/596fba44963025c878000039

function contamination(text, char){
    let textArr = text.split('')
    // Code here ;)
    for (let i = 0; i < textArr.length; i++) {
      
      textArr[i] = char;
    }  return textArr.join('');
  }