function convertBinaryToDecimal (value) {
    let dividend = value, remainderArray = [], remainder = 0;
    while( dividend != 0 ) {

        remainder = dividend % 2;

        remainderArray.push(remainder);

        dividend = Math.floor( dividend / 2 );

    }
    console.log( remainderArray.reverse().join('') );
}

convertBinaryToDecimal(15);