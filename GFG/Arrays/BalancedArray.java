// https://practice.geeksforgeeks.org/problems/balanced-array07200720/1/?category[]=Arrays&category[]=Arrays&difficulty[]=-2&difficulty[]=-1&difficulty[]=0&page=1&query=category[]Arraysdifficulty[]-2difficulty[]-1difficulty[]0page1category[]Arrays#

class Solution
{
    long minValueToBalance(long a[] ,int n){
        long []firstHalf = Arrays.copyOfRange(a, 0, n/2);
        long []secondHalf = Arrays.copyOfRange(a, (n/2), n);
        long fSum = 0, sSum = 0;
        for(long e1 : firstHalf) {
            fSum += e1;
        }
        for(long e2 : secondHalf) {
            sSum += e2;
        }
        return Math.abs(fSum - sSum);
    }
}

// Another Solution
int minValueToBalance(int a[], int n) {
        int sum1 = 0;
        for (int i = 0; i < n/2; i++)
            sum1 += a[i];
        int sum2 = 0;
        for (int i = n/2; i < n; i++)
            sum2 += a[i];
        return abs(sum1 - sum2);
}