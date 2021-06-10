// https://practice.geeksforgeeks.org/problems/count-pairs-whose-sum-is-equal-to-x/1/?category[]=Linked%20List&category[]=Linked%20List&page=1&query=category[]Linked%20Listpage1category[]Linked%20List#

class Solution {

    public static int countPairs(LinkedList<Integer> head1, LinkedList<Integer> head2, int x) {
        int count = 0;
        HashSet<Integer> s1 = new <Integer>HashSet();
        Iterator<Integer> itr1 = head1.iterator();
        Iterator<Integer> itr2 = head2.iterator();
        while(itr1.hasNext()) {
            s1.add(itr1.next());    
        }
        
        
        while(itr2.hasNext()) {
            if(s1.contains(x - itr2.next())) {
                count++;
            }
        }
        return count;
    }
}