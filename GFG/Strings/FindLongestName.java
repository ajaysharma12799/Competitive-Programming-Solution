// https://practice.geeksforgeeks.org/problems/display-longest-name0853/1/?category[]=Arrays&category[]=Arrays&difficulty[]=-2&difficulty[]=-1&difficulty[]=0&page=1&query=category[]Arraysdifficulty[]-2difficulty[]-1difficulty[]0page1category[]Arrays

class GFG {
    String longest(String names[], int n) {
        HashMap<Integer, String> map = new HashMap<Integer, String>();
        ArrayList<Integer> lengthArr = new ArrayList();
        for(String name : names) {
            int length = name.length();
            lengthArr.add(length);
            map.put(length, name);
        }
        return map.get(Collections.max(lengthArr));
    }
}

// Another Solution
class GFG {
    String longest(String names[], int n) {
        int max = 0;
        for (int j = 1; j < n; j++) {
            if (names[j].length() > names[max].length()) {
                max = j;
            }
        }
        return names[max];
    }
}