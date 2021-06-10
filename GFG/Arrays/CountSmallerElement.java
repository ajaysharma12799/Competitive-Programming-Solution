// https://practice.geeksforgeeks.org/problems/count-of-smaller-elements5947/1/?category[]=Arrays&category[]=Arrays&page=1&query=category[]Arrayspage1category[]Arrays

class Compute {
    
    public long countOfElements(long arr[], long n, long x)
    {
        long count = 0;
        for(long element : arr) {
            if(element <= x) {
                count++;
            }
        }
        return count;
    }
}