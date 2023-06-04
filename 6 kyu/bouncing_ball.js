// link : https://www.codewars.com/kata/5544c7a5cb454edb3c000047/train/javascript

//start motherSeesCount at 1 because she'll see it at least once as it drops the first time 
//start bounceheight at the first bounce height, the height it's dropped from times the bounce factor
//while bounceheight is greater than the height of the window, continue to calculate further bounces
//start off with an initial increment to the sees count, for the first bounce (this will not trigger if the first bounce is below the window because of the while loop condition)
//check if the bounce height is greater than the window, if so, increment the sees count again
//calculate the next bounce height by multiplying the previous bounce height by the bounce factor

function bouncingBall(h,  bounce,  window) {
  if (h <=0) {return -1;}
  if (bounce <=0 || bounce >=1) {return -1;}
  if (window>=h) {return -1;}
  
  let motherSeesCount = 1;
  let bounceheight = h*bounce;
  
  while (bounceheight > window) {
    motherSeesCount++;
    if (bounceheight>window) {motherSeesCount++;}
    bounceheight = bounceheight*bounce;
    
  }
  return motherSeesCount;
  
}

// more efficient method 

function bouncingBall(h,  bounce,  window) {
  var rebounds = -1;
  if (bounce > 0 && bounce < 1) while (h > window) rebounds+=2, h *= bounce;
  return rebounds;
}