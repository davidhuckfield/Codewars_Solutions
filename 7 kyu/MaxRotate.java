// link : https://www.codewars.com/kata/56a4872cbb65f3a610000026/train/java

import java.util.ArrayList;
import java.util.Collections;

public class MaxRotate {

    //function to rotate number and specifying how many digits to fix in place
    public static long rotateLeft(long number, int fixedDigits) {
        //convert number to string
        String numString = Long.toString(number);
        //store length
        int length = numString.length();
        
        //if length is 1 or less, return number as it cannot be rotated
        if (length <= 1 || fixedDigits >= length) {
            return number;
        }
        
        //declare variable to store rotated number string
        String rotatedString;
        if (fixedDigits == 0) {
            rotatedString = numString.substring(1) + numString.charAt(0);
        } else {
            rotatedString = numString.substring(0, fixedDigits) + numString.substring(fixedDigits + 1) + numString.charAt(fixedDigits);
        }
        return Long.parseLong(rotatedString);
    }

    public static long maxRot(long n) {
        ArrayList<Long> resultsArray = new ArrayList<>();
        long currentNumber = n;
        resultsArray.add(currentNumber);

        for (int i = 0; i < Long.toString(n).length(); i++) {
            currentNumber = rotateLeft(currentNumber, i);
            resultsArray.add(currentNumber);
        }

        return Collections.max(resultsArray);
    }
}

