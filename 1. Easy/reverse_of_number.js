function reverseOfNumber1 (value) { // Approach One
    let reversedNumber1 = [], remainder, reversedNumber2 = 0;
    while(value != 0) {
        remainder = value % 10;
        reversedNumber1.push(remainder); // Storing remainder into array
        reversedNumber2 = reversedNumber2 * 10 + remainder; // Adding remainder
        value = Math.floor(value / 10); // It is Mandatory to Convert into Floor OtherWise It Will Give value into decimal
    }
    console.log(reversedNumber1);
    console.log(reversedNumber2);
}

function reverseOfNumber2 (value) {
    let convertIntoString = value.toString()
    let reversedNumber = convertIntoString.split('').reverse().join('');
    console.log(parseInt(reversedNumber))
    /* 
        toString() : Convert number into string
        split(delimeter) : split string into array with given delimeter eg let string = ajay output = ['a', 'j', 'a', 'y']
        reverse() : reverse value of array
        join(delimeter) : reverse of split it joins value of seperated array value into single value eg ['a', 'j', 'a', 'y'] => ajay
    */
}

reverseOfNumber1(123);
reverseOfNumber2(456);