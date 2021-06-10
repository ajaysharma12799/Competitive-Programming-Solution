// https://practice.geeksforgeeks.org/problems/find-minimum-and-maximum-element-in-an-array4428/1/?category[]=Arrays&category[]=Arrays&page=1&query=category[]Arrayspage1category[]Arrays#

class Compute 
{
    static pair getMinMax(long a[], long n)  
    {
        long min = a[0];
        long max = a[0];
        for(int i=0; i<a.length; i++) {
            if(min >= a[i]) {
                min = a[i];
            }
        }
        for(int i=0; i<a.length; i++) {
            if(max <= a[i]) {
                max = a[i];
            }
        }
        pair p = new pair(min, max);
        return p;
    }
}