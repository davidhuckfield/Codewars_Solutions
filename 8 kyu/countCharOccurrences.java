// link : https://www.codewars.com/kata/55f1b763dd670651620000ce/train/java

interface Count {
	static int countCharOccurrences(String s, char c) {
    int count = 0;
    for (int i=0; i<s.length(); i++) {
      if (s.charAt(i)==c) {
        count++;
      }
    }
    return count;
  }
}
