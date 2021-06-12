// https://practice.geeksforgeeks.org/problems/number-of-occurrence2259/1/?category[]=Arrays&category[]=Arrays&difficulty[]=-2&difficulty[]=-1&difficulty[]=0&page=1&query=category[]Arraysdifficulty[]-2difficulty[]-1difficulty[]0page1category[]Arrays

class Solution {
    int count(int[] arr, int n, int x) {
        int count = 0;
        for(int e : arr) {
            if(e == x) {
                count++;
            }
        }
        return count;
    }
}