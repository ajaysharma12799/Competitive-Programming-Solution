// https://practice.geeksforgeeks.org/problems/java-strings-set-15112/1/?category[]=Strings&category[]=Strings&page=1&query=category[]Stringspage1category[]Strings

class Solution {
    static String conRevstr(String S1, String S2) {
        String newString = S1 + S2;
        char []ch = newString.toCharArray();
        String reverseString = "";
        for(int i=ch.length-1; i>=0; i--) {
            reverseString += ch[i];
        }
        return reverseString;
    }
}