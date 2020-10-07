function replace0With1 (value) { // Approach One
    let convertedString = value.toString(); 
    let convertedArray = convertedString.split('');
    for(let i = 0; i < convertedArray.length; i++) {
        if(convertedArray[i] === '0') {
            convertedArray[i] = '1';
        }
    }
    console.log( parseInt(convertedArray.join('')) );
}

replace0With1(102405);