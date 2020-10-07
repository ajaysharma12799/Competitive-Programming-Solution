function checkAutomorphicNumber (value) {
    let lastRemainder = value % 10, automorphic = 0, automorphicRemainder = 0;
    automorphic = Math.pow(value, 2);
    automorphicRemainder = automorphic % 10;
    return lastRemainder == automorphicRemainder ? true : false;
}

checkAutomorphicNumber(5) ? console.log('Automorphic Number') : console.log('Not Automorphic Number');