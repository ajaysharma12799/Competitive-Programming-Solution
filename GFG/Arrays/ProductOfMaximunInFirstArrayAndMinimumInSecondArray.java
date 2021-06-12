// https://practice.geeksforgeeks.org/problems/product-of-maximum-in-first-array-and-minimum-in-second3943/1/?category[]=Arrays&category[]=Arrays&difficulty[]=-2&difficulty[]=-1&difficulty[]=0&page=1&query=category[]Arraysdifficulty[]-2difficulty[]-1difficulty[]0page1category[]Arrays

class Solution{
    // Function for finding maximum and value pair
    public static long find_multiplication (int arr[], int brr[], int n, int m) {
        
        Integer[] arr1 = Arrays.stream(arr).boxed().toArray( Integer[]::new );
        Integer[] arr2 = Arrays.stream(brr).boxed().toArray( Integer[]::new );
        long max = Collections.max(Arrays.asList(arr1));
        long min = Collections.min(Arrays.asList(arr2));
        return max * min;
    }
}

