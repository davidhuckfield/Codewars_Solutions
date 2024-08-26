// link : https://www.codewars.com/kata/559590633066759614000063/train/java

class MinMax {
    public static int[] minMax(int[] arr) {
      int min = arr[0];
      int max = arr[0];
      
      for (int i=0; i<arr.length; i++) {
        if (arr[i] > max) {
          max = arr[i];
        }
        if (arr[i] < min) {
          min = arr[i];
        }
      }
      return new int[]{min, max};
    }
}