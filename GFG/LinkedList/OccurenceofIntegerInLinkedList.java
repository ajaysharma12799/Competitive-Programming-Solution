// https://practice.geeksforgeeks.org/problems/occurence-of-an-integer-in-a-linked-list/1/?category[]=Linked%20List&category[]=Linked%20List&page=1&query=category[]Linked%20Listpage1category[]Linked%20List#

class Solution
{
    public static int count(Node head, int search_for)
    {
        Node currentNode = head;
        int count = 0;
        while(currentNode != null) {
            if(currentNode.data == search_for) {
                count++;
            }
            currentNode = currentNode.next;
        }
        return count;
    }
}