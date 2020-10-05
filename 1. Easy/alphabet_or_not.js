function checkAplhabetOrNot (value) {
    if( (value >= 'a' && value <= 'z') || (value >= 'A' && value <= 'Z') ) {
        console.log('Alphabet');
    }
    else {
        console.log('Not Alphabet');
    }
}

checkAplhabetOrNot('1');

/* 
    ASCII Character
    a-z = 97-122
    A-Z = 65-90
*/