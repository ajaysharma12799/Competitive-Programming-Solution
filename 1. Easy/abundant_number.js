function checkAbundantNumber (value) {
    let sum = 0;
    for(let i = 1; i <= value; i++) {
        if(value % i == 0) {
            sum = sum + i;
        }
    }
    return sum > value ? true : false;
}

checkAbundantNumber(1) ? console.log('Abundant Number') : console.log('Not Abundant Number');

// An abundant number is a number for which the sum of its proper divisors is greater than the number itself.