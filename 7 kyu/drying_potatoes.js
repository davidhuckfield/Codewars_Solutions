// link : https://www.codewars.com/kata/58ce8725c835848ad6000007/train/javascript

function potatoes(p0, w0, p1) {
    console.log(`initial water percent ${p0}, initial weight ${w0}, final water percent ${p1}`);
      let waterWeight = w0 * (p0/100);
    console.log(`waterWeight is ${waterWeight}`);
      let dryWeight = w0 - waterWeight;
    console.log(`dryWeight is ${dryWeight}`)
      let finalDryPercentage = 100 - p1;
    console.log(`finalDryPercentage is ${finalDryPercentage}`);
      let finalTotalWeight = (dryWeight / finalDryPercentage) * 100;
    console.log(`finalTotalWeight is ${finalTotalWeight}`);
    //added 0.000001 to solve floating point issues on a couple of test cases
      return Math.trunc(finalTotalWeight+0.000001);
  }