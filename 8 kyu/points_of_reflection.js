// link : https://www.codewars.com/kata/57bfea4cb19505912900012c

function symmetricPoint(p, q) {
  const vectorQP = [p[0]-q[0],p[1]-q[1]];
  console.log(vectorQP);
  const reversedVectorQP = [-vectorQP[0],-vectorQP[1]];
  console.log(reversedVectorQP);
  const oppositePoint = [q[0]+reversedVectorQP[0],q[1]+reversedVectorQP[1]];
  console.log(oppositePoint);
  return oppositePoint;
}

symmetricPoint([0,0],[1,1]);