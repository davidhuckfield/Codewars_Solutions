// link : https://www.codewars.com/kata/578c1e2edaa01a9a02000b7f

function aliasGen(first, last){
    console.log(first, last);
    let firstInitial = first.charAt(0);
    let secondInitial = last.charAt(0);
    if (!/^[a-zA-Z]/.test(firstInitial.toUpperCase()) || !/^[a-zA-Z]/.test(secondInitial.toUpperCase())) {
      return "Your name must start with a letter from A - Z."
    }
    let firstAlias = firstName[firstInitial.toUpperCase()];
    let secondAlias = surname[secondInitial.toUpperCase()];
    return firstAlias + " " + secondAlias;
}