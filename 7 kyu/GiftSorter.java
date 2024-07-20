// link : https://www.codewars.com/kata/52aeb2f3ad0e952f560005d3/train/java

import java.util.Arrays;

public class GiftSorter{
  public String sortGiftCode(String code){
    char[] characters = code.toCharArray();
    Arrays.sort(characters);
    String sorted = new String(characters);
    return sorted;
  }
}