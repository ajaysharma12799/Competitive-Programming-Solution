function checkVowelOrConsonant (value) {
    if( (value === 'a' || value === 'e' || value === 'i' || value === 'o' || value === 'u' ) || (value === 'A' || value === 'E' || value === 'I' || value === 'O' || value === 'U' ) ) {
        console.log('Vowel');
    }
    else {
        console.log('Consonant');
    }
}

checkVowelOrConsonant('A');