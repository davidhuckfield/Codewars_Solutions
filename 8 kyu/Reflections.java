// link : https://www.codewars.com/kata/57bfea4cb19505912900012c/train/java

public class Reflections {
  
  public static int[] reflectPoint(int[] p, int[] q) {
    int[] vectorQP = {p[0]-q[0],p[1]-q[1]};
    int[] reversedVectorQP = {-vectorQP[0], -vectorQP[1]};
    int[] oppositePoint = {q[0]+reversedVectorQP[0], q[1]+reversedVectorQP[1]};
    return oppositePoint;
  }
  
}
