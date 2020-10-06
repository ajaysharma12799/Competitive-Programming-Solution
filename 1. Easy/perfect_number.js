function perfectNumber (value) {
    let sum = 0;
    for(let i = 1; i < value; i++) {
        if( value % i == 0 ) {
            sum = sum + i;
        }
    }

    return sum == value ? true : false;
    
}

perfectNumber(5) ? console.log('Perfect Number') : console.log('Not Perfect Number');

// A perfect number is a number which is equal to the sum of its proper positive divisors