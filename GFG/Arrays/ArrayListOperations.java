// https://practice.geeksforgeeks.org/problems/arraylist-operation/1/?category[]=Arrays&category[]=Arrays&page=1&query=category[]Arrayspage1category[]Arrays

class Geeks
{
    // Function to insert element
    public static void insert(ArrayList<Character> clist, char c)
    {
        clist.add(c);
    }
    
    // Function to count frequency of element
    public static void freq(ArrayList<Character> clist, char c)
    {
     
        if(clist.contains(c)) {
            int frequency = Collections.frequency(clist, c);
            System.out.println(frequency);   
        }
        else {
            System.out.println("Not Present");   
        }
        
    }
}