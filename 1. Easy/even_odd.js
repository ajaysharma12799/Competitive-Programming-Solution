function checkEvenorOdd (value) { // Approach One

    if(value %2 == 0) {
        console.log('Even');
    }
    else {
        console.log('Odd');
    }

}

function bitwiseApproach(value) { // Approach Two
    return ( !(value & 1) );
}

checkEvenorOdd(2);
bitwiseApproach(4) ? console.log('Even') : console.log('Odd');