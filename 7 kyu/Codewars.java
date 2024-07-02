// link : https://www.codewars.com/kata/5949481f86420f59480000e7/train/java

public class Codewars {
    public static String oddOrEven (int[] array) {
      int sum = 0;
      for (int number : array) {
        sum += number;
      }
      if (sum % 2 == 0) {
        return "even";
      } else {
        return "odd";
      }
    }
  }