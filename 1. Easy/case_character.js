function checkCase1 (string) { 

    let value = string.charCodeAt();

    if(value >= 65 && value <= 90) {
        console.log('Uppercase');
    }
    else if (value >= 97 && value <= 122) {
        console.log('Lowercase');
    }
    else {
        console.log('Numbers');
    }
}

checkCase1('B');

/* 
    Another Approach is Also There that is That you need to convert given string to uppercase or lowercase using string methods
    
    toUpperCase() : Convert to UpperCase
    toLowerCase() : Convert to LowerCase
    
*/

/* 
    a-z : 97-122
    A-Z : 65-90
*/