// https://practice.geeksforgeeks.org/problems/java-1-d-and-2-d-array2952/1/?category[]=Arrays&category[]=Arrays&page=1&query=category[]Arrayspage1category[]Arrays

class Complete
{
    public static ArrayList<Integer> array(int a[][], int b[], int n)
    {
        ArrayList<Integer> arr = new ArrayList<Integer>();
        int sum = 0;
        for(int i=0; i<n; i++) {
            for(int j=0; j<n; j++) {
                if(i == j) {
                    sum += a[i][j];
                }
            }
        }
        arr.add(sum);
        Arrays.sort(b);
        arr.add(b[n-1]);
        return arr;
    }
}