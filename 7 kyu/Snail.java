// link : https://www.codewars.com/kata/66cdc6ab9e7a9f009e0ca8f6/train/java

public class Snail {
    public static boolean canSnailReachEnd(double length, double speed, double lengthIncreases) {
        
      double snailPosition = 0;
      double rubberBandEnd = length;
      
      for (int i=0; i<525600; i++) {
        snailPosition += speed;
        rubberBandEnd += lengthIncreases;
        if (snailPosition >= rubberBandEnd) {
          return true;
        }
      }
      return false;
    }
}
