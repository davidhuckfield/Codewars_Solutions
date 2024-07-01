// link : https://www.codewars.com/kata/542c0f198e077084c0000c2e/train/java

public class FindDivisor {

    public long numberOfDivisors(int n) {
      long count = 0;
      for (int i = 1; i <= Math.sqrt(n); i++) {
        if (n % i == 0) {
          if (i == n / i) {
            count++;
          } else {
            count += 2;
          }
        }
      }
      return count;
  
    }
  
  }
