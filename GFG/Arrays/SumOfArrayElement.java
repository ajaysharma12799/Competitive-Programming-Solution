// https://practice.geeksforgeeks.org/problems/sum-of-array-elements2502/1/?category[]=Arrays&category[]=Arrays&page=1&query=category[]Arrayspage1category[]Arrays

class Get
{
    public static int sumElement(int arr[], int n)
    {
        int sum = 0;
        for(int e : arr) {
            sum += e;
        }
        return sum;
    }
}