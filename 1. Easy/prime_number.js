function checkPrimeNumber (value) { // Approach One
    let flag = 0;
    for(let i = 2; i <= value / 2; i++) {
        if(value % i == 0) {
            flag = flag + 1;
        }
    }

    if(flag > 0) {
        console.log('Not Prime Number');
    }
    else {
        console.log('Prime Number');
    }
}

checkPrimeNumber(5)