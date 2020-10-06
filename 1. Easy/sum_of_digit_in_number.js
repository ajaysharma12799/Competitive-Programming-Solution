function sumOfDigitInNumber (value) {
    let copiedValue = value, sum = 0, remainder = 0;
    while(copiedValue != 0) {
        remainder = copiedValue % 10;
        sum = sum + remainder;
        copiedValue = Math.floor(copiedValue / 10);    
    }
    console.log(sum);
}

sumOfDigitInNumber(12345);