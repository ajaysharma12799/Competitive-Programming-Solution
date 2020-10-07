function convertBinaryToDecimal (value) {
    let length = value.toString().length, sum = 0, digitArray = [], copiedvalue = value;

    while(copiedvalue != 0) {
        let remainder = copiedvalue % 10;
        digitArray.push(remainder);
        copiedvalue = Math.floor(copiedvalue / 10);
    }

    console.log(digitArray);

    for(let i = 0; i < length; i++) {
        sum = sum + digitArray[i] * Math.pow(2, i);
    }

    console.log(sum);
}

convertBinaryToDecimal(1010);