// https://practice.geeksforgeeks.org/problems/linked-list-length-even-or-odd/1/?category[]=Linked%20List&category[]=Linked%20List&page=1&query=category[]Linked%20Listpage1category[]Linked%20List#

class GFG
{
	int isLengthEvenorOdd(Node head1)
	{
	    Node currentNode = head1;
	    int length = 0;
	    while(currentNode != null) {
	        length++;
	        currentNode = currentNode.next;
	    }
	    if(length%2 == 0) {
	        return 0;
	    }
	    else {
	        return 1;
	    }
	}
}