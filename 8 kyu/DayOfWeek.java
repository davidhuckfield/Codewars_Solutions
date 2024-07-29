// link : https://www.codewars.com/kata/59dd3ccdded72fc78b000b25/train/java

public class DayOfWeek {

    public static String getDay(int n) {
     
        String[] days = {"Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"};
      if (n<=7 && n >0) {
      return days[n-1];
        }
      else {
        return "Wrong, please enter a number between 1 and 7";
      }
 }
  
}
