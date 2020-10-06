function checkPalindrome (value) {
    let copiedvalue = value, remainder = 0, reversedNumber = 0;
    while(copiedvalue != 0) {
        remainder = copiedvalue % 10;
        reversedNumber = reversedNumber * 10 + remainder;
        copiedvalue = Math.floor(copiedvalue / 10);
    }

    if(reversedNumber == value) {
        return true;
    }
    else {
        return false;
    }

}

checkPalindrome(11) ? console.log('Palindrome') : console.log('Not Palindrome');