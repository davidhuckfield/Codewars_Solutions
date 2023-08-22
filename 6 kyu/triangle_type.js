// link : https://www.codewars.com/kata/53907ac3cd51b69f790006c5

/* Should return ᐃ type:
  0 : if ᐃ cannot be made with given sides
  1 : acute ᐃ
  2 : right ᐃ
  3 : obtuse ᐃ
*/
function triangleType(a, b, c){
  
    //check if side lengths can form a triangle
    if (a+b>c && a+c>b && b+c>a ) {
    //calculate angles
    
    const angleA = Math.acos((b * b + c * c - a * a) / (2 * b * c));
    const angleB = Math.acos((a * a + c * c - b * b) / (2 * a * c));
    const angleC = Math.PI - angleA - angleB;
    
    //convert angles from radians to degrees
    const angleA_deg = (angleA * 180) / Math.PI;
    const angleB_deg = (angleB * 180) / Math.PI;
    let angleC_deg = (angleC * 180) / Math.PI;
      
    //fix for edge cases as rounding was not specified in the question and rounding one way or the other causes incorrect calculations
    if (angleC_deg===90.00000000000001) {angleC_deg=90}
    if (angleC_deg===89.99999999999999) {angleC_deg=90}
      
    console.log(`when A is ${a}, angleA_deg is ${angleA_deg}`)
      console.log(`when B is ${b}, angleB_deg is ${angleB_deg}`)
      console.log(`when C is ${c}, angleC_deg is ${angleC_deg}`)
    
    //if all angles are less than 90, return 1 for acute
    if (angleA_deg < 90 && angleB_deg < 90 && angleC_deg < 90) {
      return 1;
    }
    //if any angle is exactly 90, return 2 for right
    else if (angleA_deg===90 || angleB_deg===90 || angleC_deg===90) {
      return 2;
    }
    //if any angle is more than 90, return 3 for obtuse
    else if (angleA_deg>90 || angleB_deg>90 || angleC_deg>90) {
      return 3;
    }
  }
    //return 0 if the sides cannot form a triangle
    else {return 0;}
  }