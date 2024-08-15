// link : https://www.codewars.com/kata/5bb804397274c772b40000ca/train/java

//class name changed from Codewars version
public class StackedBalls {

  public static double stackHeight2d(int layers) {
    if (layers==0) {return 0;}
    return 1 + Math.sqrt(3)/2 * (layers-1);
  }

}
