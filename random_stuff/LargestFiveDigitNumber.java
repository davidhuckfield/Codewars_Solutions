// link : 

public class LargestFiveDigitNumber {
    public static int solve(final String digits) {
        
        String currentDigits = "";
        String longestDigits = "";
      
        for (int i=0; i<digits.length(); i++) {
          
          int currentInputDigit = Character.getNumericValue(digits.charAt(i));
          
          if (currentDigits.length() >0) {
              int currentDigitsLastDigit = Character.getNumericValue(currentDigits.charAt(currentDigits.length()-1));
              if (currentInputDigit == currentDigitsLastDigit + 1) {
                currentDigits += digits.charAt(i);
              } else {
                if (currentDigits.length() > longestDigits.length()) {
                  longestDigits = currentDigits;
                }
                currentDigits = "" + digits.charAt(i);
              }
          } else {
            currentDigits = "" + digits.charAt(i);
          }
     
    }
      if (currentDigits.length() > longestDigits.length()) {
        longestDigits = currentDigits;
      }
      int returnDigits = Integer.parseInt(longestDigits);
      return returnDigits;
}
  }