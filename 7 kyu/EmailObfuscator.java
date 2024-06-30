// link : https://www.codewars.com/kata/562d8d4c434582007300004e/train/java

public class EmailObfuscator {
    
    public static String obfuscate(String email) {

      String obfuscatedEmail = email.replaceAll("@", " [at] ");
      obfuscatedEmail = obfuscatedEmail.replaceAll("\\.", " [dot] ");
      return obfuscatedEmail;
    }
}