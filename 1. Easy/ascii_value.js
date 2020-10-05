function ASCII_Value(value) {
    let convertedValue1 = value.charCodeAt(0);
    /*
        charCodeAt(index) : return integer of given index value, by default index is 0, if index reach out-of-range then return NaN 
    */
    console.log(convertedValue1);

    let convertedValue2 = value.codePointAt(0);
    /* 
        charCodeAt(index) : return unicode of given index value, by default index is 0, if index reach out-of-range then return undefined 
    */
    console.log(convertedValue2)

}

ASCII_Value('a');