function greatestOfThreeNumber1 (a, b, c) { // Approach One
    if( (a > b) && (a > c) ) {
        console.log('A');
    }
    else if ( (b > a) && (b > c) ) {
        console.log('B');
    }
    else {
        console.log('C');
    }
}

function greatestOfThreeNumber2 (A, B, C) { // Approach Two
    let greatest = A > B ? ( A > C ? A : C ) : ( B > C ? B : C );
    console.log(greatest);
}

greatestOfThreeNumber1(20, 2, 10);
greatestOfThreeNumber2(2, 20, 1);