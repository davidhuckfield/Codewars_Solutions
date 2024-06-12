// link : https://www.codewars.com/kata/5748a883eb737cab000022a6/train/javascript

const cannonsReady = (gunners) => {
  let answers = Object.values(gunners);
  if (answers.every(value => value === "aye")) {return "Fire!"}
  else {return "Shiver me timbers!"}
}