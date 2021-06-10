// https://practice.geeksforgeeks.org/problems/largest-element-in-array4009/1/?category[]=Arrays&category[]=Arrays&page=1&query=category[]Arrayspage1category[]Arrays#

class Compute {
    
    public int largest(int arr[], int n)
    {
        int max = arr[0];
        for(int i=0; i<n; i++) {
            if(arr[i] > max) {
                max = arr[i];
            }
        }
        return max;
    }
}