// link : https://www.codewars.com/kata/59fca81a5712f9fa4700159a/train/java

//class name changed to match filename
//public class Kata {
public class ConvertToBinary {

    public static int toBinary(int n) {
      String binaryString = Integer.toBinaryString(n);
      int binaryNumber = Integer.parseInt(binaryString);
      return binaryNumber;
    }
  
  }
