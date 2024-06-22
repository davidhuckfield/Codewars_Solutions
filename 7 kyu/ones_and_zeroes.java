// link : https://www.codewars.com/kata/578553c3a1b8d5c40300037c/train/java

import java.util.List;

public class BinaryArrayToNumber {

    public static int ConvertBinaryArrayToInt(List<Integer> binary) {
      int result = 0;
      for (int digit : binary) {
            result = (result << 1) | digit;
        }
        return result;
    }
}
