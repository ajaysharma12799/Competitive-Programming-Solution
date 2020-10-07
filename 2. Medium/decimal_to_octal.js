function convertDecimalToOctal (value) {
    let dividend = value, remainderArray = [], remainder = 0;
    while( dividend != 0 ) {

        remainder = dividend % 8;

        remainderArray.push(remainder);

        dividend = Math.floor( dividend / 8 );

    }
    console.log( remainderArray.reverse().join('') );
}

convertDecimalToOctal(200);