// https://practice.geeksforgeeks.org/problems/count-nodes-of-linked-list/1/?category[]=Linked%20List&category[]=Linked%20List&page=1&query=category[]Linked%20Listpage1category[]Linked%20List

class Solution
{
    //Function to count nodes of a linked list.
    public static int getCount(Node head)
    {
        Node currentNode = head;
        int length = 0;
        while(currentNode != null) {
            length++;
            currentNode = currentNode.next;
        }
        return length;
    }
}