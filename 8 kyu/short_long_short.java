
// link : https://www.codewars.com/kata/50654ddff44f800200000007/train/java

public class ShortLongShort {
    public static String solution(String a, String b) {
      if (a.length() > b.length()) {return b + a + b;}
      else {return a + b + a;}
    }
}