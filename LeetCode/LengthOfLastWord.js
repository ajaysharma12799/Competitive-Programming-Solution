function lengthOfLastWord(s) {
    let stringArray = s.trim().split(" ");
    let result = stringArray[stringArray.length - 1];
    return result.length;
};
