function factorial (number) { // will calculate factorial of each digit passed
    let factorial = 1;
    for(let i=number; i >= 1; i--) {
        factorial = factorial * i;
    }
    return factorial;
}

function strongNumber (value) {
    let copiedValue = value, sum = 0;
    while(copiedValue != 0) {
        remainder = copiedValue % 10;
        sum = sum + factorial(remainder);
        copiedValue = Math.floor(copiedValue / 10);
    }
    
    return sum == value ? true : false;

}

strongNumber(120) ? console.log('Strong Number') : console.log('Not Strong Number');

// sum of the factorial of the digits is equal to the number itself