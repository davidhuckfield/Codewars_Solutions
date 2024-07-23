// link : https://www.codewars.com/kata/56b1f01c247c01db92000076/train/java

public class Solution{
  public static String doubleChar(String s){
    String doubleString = "";
    for (int i=0; i<s.length(); i++) {
      doubleString += s.charAt(i);
      doubleString += s.charAt(i);
    }
    return doubleString;
  }
}
