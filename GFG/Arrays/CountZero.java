// https://practice.geeksforgeeks.org/problems/count-the-zeros2550/1/?category[]=Arrays&category[]=Arrays&page=1&query=category[]Arrayspage1category[]Arrays

class Solution {
    int countZeroes(int[] arr, int n) {
        int count = 0;
        for(int e : arr) {
            if(e == 0) {
                count++;
            }
        }
        return count;
    }

}